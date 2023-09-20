import { NextFunction, Request, Response } from "express";
import { response } from "../utils/utils";
import controller from "../controllers/load.controller";
import { StatusCodes } from "http-status-codes";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const userCasinoId = req.params.id;
  const { playerId, coins_outflow_qty, transfer_url } = req.body;
  return response(res, StatusCodes.OK, await controller.create({ playerId, userCasinoId, coins_outflow_qty, transfer_url }));
};

const get = async (req: Request, res: Response, next: NextFunction) => {
  const {userCasinoId , playerId , casino, teller, start, end} = req.query
  return response(res, StatusCodes.OK,await controller.get(userCasinoId as string, playerId as string , casino as string, teller as string, start as string, end as string));
}

const getByQuery = async (req: Request, res: Response, next: NextFunction) => {
//   const { date } = req.query
//   // agregar busquedas por rangos de montos
//   return response(res, StatusCodes.OK,await controller.get(date));
}

const findOneById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  return response(res, StatusCodes.OK,await controller.findOneById(id));
}

const del = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  return response(res, StatusCodes.OK,await controller.deleteLoad(id));
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  const item = req.body;
  return response(res, StatusCodes.OK,await controller.update(id, item));
}


export default { create, get, getByQuery, findOneById, delete: del, update }