import { NextFunction, Request, Response } from "express";
import { response } from "../utils/utils";
import { StatusCodes } from "http-status-codes";
import controller from "../controllers/userCasino.controller";
import { User_Casino } from "../domain/user_casino";


const create = async (req: Request, res: Response, next: NextFunction) => {
    const usersId = req.body.usersId;
    const casinoId = req.body.casinoId;
    return response(res, StatusCodes.OK, await controller.create(usersId, casinoId));
  };

  const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, casinoId} = req.query;
    return response(res, StatusCodes.OK, await controller.getAll(userId as string, casinoId as string));
  };

  const update = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    return response(res, StatusCodes.OK, await controller.update(id, {...req.body} as User_Casino));
  };

  export default { create, getAll, update };