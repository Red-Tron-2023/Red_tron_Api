import { Router } from "express";
import {historicHandler as handler} from '../handlers';

export default function historicRouter(): Router {
    return Router()
      //.post("/", handler.create)
      .get("/", handler.getAll)
      //.put("/:id", handler.update)
      //.delete("/:id", handler.delete)
  }