import { Router } from 'express';
import {casinoHandler as handler} from '../handlers';
import { validateSchema } from '../middlewares/validateSchema.middleware';
import { casinoCreateSchema } from '../schemas/casinos/casino-create.schema';
import { casinoUpdateSchema } from '../schemas/casinos/casino-update.schema';


export default function casinoRouter(): Router {
  return Router()

    .get("/", handler.getAll)
    .get("/:id", handler.findOneById)
    .post("/", /*validateSchema(casinoCreateSchema),*/handler.create)
    .delete("/:id", handler.delete)
    .put("/:id",/*validateSchema(casinoUpdateSchema),*/ handler.update)

  
}