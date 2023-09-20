import { StatusCodes } from "http-status-codes";
import { BaseError } from "../utils/errors/error";
import { UserCasinoDAO } from "../dao/userCasino.dao";
import { PlayerDAO } from "../dao/player.dao";
import { LoadDAO } from "../dao/load.dao";
import { Load as LoadReq } from "../interfaces/load.interface";
import { LoadEntity } from "../models/load.model";
import coinsMovementsCrl from "../controllers/coinsMovements.controller"
import { Load, LoadStatus } from "../domain/load";
import historicController from "./historic.controller";
import { Historic, HistoricCategory } from "../domain/historic";
import { User_Casino_Entity } from "../models/user_casino.model";
import userCtrl from "./user.controller";
import { UserEntity } from "../models/user.model";



const create = async (item: LoadReq) => {
    
    const userCasinoDAO = await new UserCasinoDAO();
    const userCasino = await userCasinoDAO.findById(item.userCasinoId)
    if (Object.keys(userCasino).length === 0) throw new BaseError('The id does not belong to an existing userCasino.', StatusCodes.CONFLICT);
    if (userCasino.status !== 'ACTIVE') throw new BaseError('The userCasino status is not ACTIVE.', StatusCodes.CONFLICT);
   
    const teller = await userCtrl.findOneById(userCasino.user.id);
    
    const playerDAO = await new PlayerDAO();
    const player = await playerDAO.read(item.playerId)
    if (!player) throw new BaseError(`The id: '${item.playerId}' does not belong to an existing player.`, StatusCodes.CONFLICT);
    if (player.status !== 'ACTIVE') throw new BaseError('This Player is not enabled to perform that action.', StatusCodes.CONFLICT);

    const loadDAO = await new LoadDAO();
    const load = new LoadEntity();

    load.user_casino = userCasino;
    load.player = player;
    load.coins_outflow_qty = item.coins_outflow_qty;
    load.transfer_url = item.transfer_url;

    const newLoad = await loadDAO.create(load);
    
    // Registramos movimiento de fichas de salida (aca se actualiza user_casino)
    await coinsMovementsCrl.createCoinsOutflow({
                                            userId: userCasino.user.id, 
                                            userCasinoId: userCasino.id, 
                                            outflow_qty: item.coins_outflow_qty
                                            }); 


    if (+userCasino.coins >=  item.coins_outflow_qty) {
        load.status = LoadStatus.COMPLETED;

        const creditUserCasino = new User_Casino_Entity();
        creditUserCasino.debits = +userCasino.debits + +item.coins_outflow_qty;
        await userCasinoDAO.update(item.userCasinoId, creditUserCasino);

        const tellerUpdate = new UserEntity();
        
        tellerUpdate.total_balance = +teller.total_balance + +item.coins_outflow_qty
    
        await userCtrl.update(teller.id, tellerUpdate)

    }


    // Registramos historico
    const historic = await historicController.create({entity: HistoricCategory.load} as Historic);
    load.historic = historic;

    // Actualizamos user_casino de load con fichas actualizadas
    const userCasinoUpdated = await userCasinoDAO.findById(item.userCasinoId)
    load.user_casino = userCasinoUpdated;
    
    return await loadDAO.update(newLoad.id, load);

}


const get = async (userCasinoId?: string , playerId?: string , casino?: string, teller?: string, start?:string, end?: string) => {
    const loadDAO = await new LoadDAO();
    const result = await loadDAO.search(userCasinoId, playerId, casino, teller)
    return result
  }


const findOneById = async (id: string) => {

}

const deleteLoad = async (id: string) => {
}  

const update = async (id: string, item: Load) => {
    const loadDAO = await new LoadDAO();
    return (await loadDAO.update(id, item).catch((error: Error) => new BaseError("No se pudo actualizar la carga de fichas", StatusCodes.CONFLICT, error.message)));
}


export default { create, get, findOneById, deleteLoad, update }