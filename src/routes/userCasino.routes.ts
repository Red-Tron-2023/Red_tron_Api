import { Router } from 'express';
import {userCasinoHandler as handler} from '../handlers';
import { validateSchema } from '../middlewares/validateSchema.middleware';
import { userCasinoCreateSchema } from '../schemas/user_casino/user_casino-create';
import { userCasinoUpdateSchema } from '../schemas/user_casino/user_casino-update';

export default function usersCasinoRouter(): Router {
  return Router()
    .put("/:id",/*validateSchema(userCasinoUpdateSchema),*/ handler.update)
    .post("/",/*validateSchema(userCasinoCreateSchema),*/ handler.create)
    .get("/", handler.getAll)
}