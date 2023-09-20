import { StatusCodes } from "http-status-codes";
import { BaseError } from "../utils/errors/error";
import { CoinsMovementsDAO } from "../dao/coinsMovements.dao";
import { CoinsInflow } from "../interfaces/coinsInflow.interface";
import { User } from "../domain/user";
import { User_Casino } from "../domain/user_casino";
import { CoinsMovementsEntity } from "../models/coinsMovements.model";
import { CoinsOutflow } from "../interfaces/coinsOutflow.interface";
import { CoinsMovements } from "../domain/coinsMovements";
import { Historic, HistoricCategory } from "../domain/historic";
import historicCtrl from "../controllers/historic.controller"
import loadCtrl from "../controllers/load.controller"
import userCasinoCtrl from "./userCasino.controller";
import userCtrl from "./user.controller";
import { Load, LoadStatus } from "../domain/load";
import { UserEntity } from "../models/user.model";
import { User_Casino_Entity } from "../models/user_casino.model";

const createCoinsInflow = async (item: CoinsInflow) => {

    const userCasino = await userCasinoCtrl.findById(item.userCasinoId)
    const teller = await userCtrl.findOneById(userCasino.user.id);
    
    if (!userCasino) throw new BaseError('The id does not belong to an existing userCasino.', StatusCodes.CONFLICT);
    if (userCasino.status !== 'ACTIVE') throw new BaseError('The userCasino status is not ACTIVE.', StatusCodes.CONFLICT);
    
    const user = await userCtrl.findOneById(item.userId);

    if (!user) throw new BaseError('The id does not belong to an existing user.', StatusCodes.CONFLICT);
    if (user.role !== 'ADMIN') throw new BaseError('This User is not enabled to perform that action.', StatusCodes.CONFLICT);


    const coinsMovementsDAO = await new CoinsMovementsDAO();
    const lastBalance = (await coinsMovementsDAO.findLastInputByUserCasinoId(item.userCasinoId))?.coins_balance;

    const coinsMovement = new CoinsMovementsEntity();
    coinsMovement.user = user.id as unknown as User
    coinsMovement.userCasinoId = userCasino.id as unknown as User_Casino
    coinsMovement.inflow_qty = item.inflow_qty
    coinsMovement.outflow_qty = 0
    coinsMovement.coins_balance = +lastBalance + item.inflow_qty; 
    coinsMovement.historic = await historicCtrl.create({entity: HistoricCategory.coinsInflow} as Historic);
    const newCoinsMovement = await coinsMovementsDAO.createCoinsFlow(coinsMovement)
        
    const resto = await checkLoadToUpdate(userCasino, +item.inflow_qty + +userCasino.coins);
    
    if(resto.deuda){
        return resto
    }
    
    const coinsUpdate = new User_Casino_Entity()
    coinsUpdate.coins= resto
    coinsUpdate.debits= +userCasino.debits + +userCasino.creditCoins
    coinsUpdate.creditCoins= 0 
            
    await userCasinoCtrl.update(
                            item.userCasinoId,  
                            coinsUpdate as unknown as User_Casino
                            );

    //Se actualiza el total_balance si la carga de fichas es mayor a las adeudadas
    if(!resto.deuda && +userCasino.creditCoins > 0) {
        const tellerUpdate = new UserEntity();
     
        //Sumamos los creditos que nos quedaron mas los creditCoins
        const sumar = +userCasino.coins + +userCasino.creditCoins
        
        tellerUpdate.total_balance = +teller.total_balance + sumar
    
        await userCtrl.update(teller.id, tellerUpdate)
        
    }

    //check load's status to update

    return await coinsMovementsDAO.update(newCoinsMovement.id, newCoinsMovement);
   
}


//La función  checkLoadToUpdate  actualiza las cargas pendientes del usuario del casino, completando las que 
//se pueden cubrir con las monedas disponibles y generando un informe de deuda si las monedas no son suficientes.
async function checkLoadToUpdate(userCasino: User_Casino, availableCoins: number) : Promise<any>{
    
    const loadsPending = (await loadCtrl.get(userCasino.id)).filter(load => load.status === LoadStatus.PENDING);
    
    for(let i=0; availableCoins>0 && i<loadsPending.length; i++){
        if(availableCoins >= loadsPending[i].coins_outflow_qty){
            await loadCtrl.update(loadsPending[i].id, {status: LoadStatus.COMPLETED} as Load)
            availableCoins = availableCoins - loadsPending[i].coins_outflow_qty;
        }else {
            break;
        }
    }

    const loadsPendingresto = (await loadCtrl.get(userCasino.id)).filter(load => load.status === LoadStatus.PENDING);
    
    if(loadsPendingresto.length){
        
        let sum = 0;
        loadsPendingresto.forEach(load => {
            sum += +load.coins_outflow_qty;
          });
        let resto = availableCoins
        const diferencia = sum - resto
        const data = {
            deuda: true,
            describe: "Las fichas cargadas no son suficientes para cubrir las cargas",
            cantidadAdeudada: sum, 
            saldoFaltante: diferencia
        }
        const userCasinoUpdate = new User_Casino_Entity();
        userCasinoUpdate.coins = +userCasino.coins + resto
        userCasinoUpdate.creditCoins = +userCasino.creditCoins - resto
        await userCasinoCtrl.update(
            userCasino.id,  
            userCasinoUpdate 
            )

        return data;
    } else {
        return availableCoins
    }
}

const createCoinsOutflow = async (item: CoinsOutflow) => {

    const userCasino = await userCasinoCtrl.findById(item.userCasinoId)
    
    if (!userCasino) throw new BaseError('The id does not belong to an existing userCasino.', StatusCodes.CONFLICT);
    if (userCasino.status !== 'ACTIVE') throw new BaseError('The userCasino status is not ACTIVE.', StatusCodes.CONFLICT);
    
    const user = await userCtrl.findOneById(item.userId);

    if (!user) throw new BaseError('The id does not belong to an existing user.', StatusCodes.CONFLICT);
    if (user.role !== 'TELLER') throw new BaseError('This User is not enabled to perform that action.', StatusCodes.CONFLICT);

    const coinsMovementsDAO = await new CoinsMovementsDAO();
    //EL BALANCE PUEDE QUEDAR NEGATIVO PARA INDICAR QUE HAY CARGAS DE FICHAS SIN APROBAR POR FALTA DE CREDITO
    
    
    const coinsMovement = new CoinsMovementsEntity();
    coinsMovement.user = user.id as unknown as User
    coinsMovement.userCasinoId = userCasino.id as unknown as User_Casino
    coinsMovement.inflow_qty = 0
    coinsMovement.outflow_qty = item.outflow_qty
    coinsMovement.coins_balance = +userCasino.coins - (+userCasino.creditCoins) - item.outflow_qty
    const newCoinsMovement = await coinsMovementsDAO.createCoinsFlow(coinsMovement)


    const coinsUpdate = item.outflow_qty > +userCasino.coins ? 
    
        {
            creditCoins: +userCasino.creditCoins + Math.abs(item.outflow_qty - +userCasino.coins),
        } : 
        {
            creditCoins: +userCasino.creditCoins,
            coins: +userCasino.coins - item.outflow_qty
        }
    
    await userCasinoCtrl.update(
                            item.userCasinoId,  
                            coinsUpdate as unknown as User_Casino
                            );

    
    return newCoinsMovement;
}



const getAll = async (adminId?: string, tellerId?:string, casinoId?: string, userCasinoId?: string, date? :string, end? : string) => {
    const coinsMovementsDAO = await new CoinsMovementsDAO();
    return (await coinsMovementsDAO.search(adminId,tellerId, casinoId, userCasinoId, date, end).catch((error: Error) => new BaseError("No se pudo buscar los movimientos de fichas", StatusCodes.CONFLICT, error.message)));
}


const findOneById = async (id: string) => {
    const coinsMovementsDAO = await new CoinsMovementsDAO();
    return (await coinsMovementsDAO.read(id).catch((error: Error) => new BaseError("No se pudo encontrar el movimiento de fichas", StatusCodes.CONFLICT, error.message)));
     
}

const deleteCoinsMovement = async (id: string) => {
    const coinsMovementsDAO = await new CoinsMovementsDAO();
    return (await coinsMovementsDAO.delete(id).catch((error: Error) => new BaseError("No se pudo eliminar el movimiento de fichas", StatusCodes.CONFLICT, error.message)));
}  

const update = async (id: string, item: CoinsMovements) => {
    const coinsMovementsDAO = await new CoinsMovementsDAO();
    return (await coinsMovementsDAO.update(id, item).catch((error: Error) => new BaseError("No se pudo actualizar el movimiento de fichas", StatusCodes.CONFLICT, error.message)));
}


export default { createCoinsInflow, createCoinsOutflow, getAll, /*getByDate,*/ findOneById, deleteCoinsMovement, update }