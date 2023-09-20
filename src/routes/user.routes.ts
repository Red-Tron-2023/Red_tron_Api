import { Router } from 'express';
import {userHandler as handler} from '../handlers';

import { validateSchema } from '../middlewares/validateSchema.middleware';
import { userCreateSchema } from '../schemas/users/user-create.schema';
import { userUpdateSchema } from '../schemas/users/user-update.schema';


export default function usersRouter(): Router {
  return Router()

    .get('/:id', handler.findOneById)
    .get("/", handler.getAll)
    .post("/",/*validateSchema(userCreateSchema),*/ handler.create)
    .delete("/:id", handler.delete)
    .put("/changePassword", handler.changePassword)
    .put("/:id",/*validateSchema(userUpdateSchema),*/handler.update)
  
}
