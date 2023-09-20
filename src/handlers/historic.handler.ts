import { NextFunction, Request, Response } from "express";
import { response } from "../utils/utils";
import controller from "../controllers/historic.controller";
import { BaseError } from "../utils/errors/error";
import { StatusCodes } from "http-status-codes";
import { HistoricCategory } from "../domain/historic";

const create = async (req: Request, res: Response, next: NextFunction) => {
  return response(res, StatusCodes.OK, await controller.create(req.body));
};


const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const {category, start, end} = req.query

  return response(res, StatusCodes.OK,await controller.getAll(category as HistoricCategory, start as string, end as string));
}

const findOneById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  return response(res, StatusCodes.OK,await controller.findOneById(id));
}

const deleteHistoric = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  return response(res, StatusCodes.OK,await controller.delete(id));
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id as string;
  const item = req.body;
  return response(res, StatusCodes.OK,await controller.update(id, item));
}


export default { create, getAll, findOneById, delete: deleteHistoric, update }