import { StatusCodes } from "http-status-codes";
import { BaseError } from "../utils/errors/error";
import { Historic, HistoricCategory } from "../domain/historic";
import { HistoricDAO } from "../dao/historic.dao";



const create = async (item: Historic) => {
    const historicDAO = await new HistoricDAO();
    return await historicDAO.create(item)
}



const getAll = async (category? : HistoricCategory, start? : string, end? : string) => {
    const historicDAO = await new HistoricDAO();
    return (await historicDAO.search(category,start,end).catch((error: Error) => new BaseError("No se pudo buscar el historial", StatusCodes.CONFLICT, error.message)));
}

const findOneById = async (id: string) => {
     
}

const deleteHistoric = async (id: string) => {
}  

const update = async (id: string, item: Historic) => {
}


export default { create, getAll, findOneById, delete: deleteHistoric, update }