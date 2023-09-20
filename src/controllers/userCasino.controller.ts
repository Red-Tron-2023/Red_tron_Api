import { StatusCodes } from "http-status-codes";
import { UserDAO } from "../dao/user.dao";
import { UserCasinoDAO } from "../dao/userCasino.dao";
import { BaseError } from "../utils/errors/error";
import { CasinoDAO } from "../dao/casino.dao";
import { User_Casino_Entity } from "../models/user_casino.model";
import { isValidUUID } from "../utils/functions/comprobarUUID";
import { User_Casino } from "../domain/user_casino";


const create = async (usersId: string[], casinoId: string) => {
  if (!isValidUUID(casinoId)) {
    throw new BaseError('Invalid casinoId format', StatusCodes.BAD_REQUEST);
  }

  const userCasinoDAO = await new UserCasinoDAO();
  const casinoDAO = await new CasinoDAO();
  const userDAO = await new UserDAO();

  const casino = await casinoDAO.read(casinoId)
  if(!casino) throw new BaseError(`The id: '${casinoId}' does not belong to an existing casino.`, StatusCodes.CONFLICT);

  const result: User_Casino[] = [];

  for(let i=0; i< usersId.length; i++) {
      
    if (!isValidUUID(usersId[i])) throw new BaseError('Invalid userid format', StatusCodes.BAD_REQUEST);
      
    const user = await userDAO.read(usersId[i]);
    if(!user) throw new BaseError(`The id: '${usersId[i]}' does not belong to an existing user.`, StatusCodes.CONFLICT);

    const checkUserCasino = await userCasinoDAO.search(usersId[i], casinoId);
    if(checkUserCasino.length !== 0) throw new BaseError('The user has already assigned to this casino', StatusCodes.CONFLICT);    
  
    const userCasino = new User_Casino_Entity();
    userCasino.user = user;
    userCasino.casino = casino;
    const subresult = await userCasinoDAO.create(userCasino);
    result.push(subresult);
  }
  
  return result;
}

const getAll = async (user?: string, casino?: string) => {
  const userCasinoDAO = await new UserCasinoDAO();
  const result = await userCasinoDAO.search(user, casino).catch(error => new BaseError("No User_Casino found with those parameters", StatusCodes.CONFLICT, error.message));
  if (result instanceof BaseError) throw result;

  return result;
};

const findById = async (id: string) => {
  const userCasinoDAO = await new UserCasinoDAO();
  const result = await userCasinoDAO.read(id).catch(error => new BaseError("No User_Casino found with the id " + id, StatusCodes.CONFLICT, error.message));
  if (result instanceof BaseError) throw result;

  return result;
}

const update =async (id:string, item: User_Casino) => {
  const userCasinoDao = await new UserCasinoDAO();
  const updateUserCasino = await userCasinoDao.update(id, item).catch((error: Error) => new BaseError(error.message, StatusCodes.CONFLICT));
  return updateUserCasino;
}

export default { create, getAll, update, findById };