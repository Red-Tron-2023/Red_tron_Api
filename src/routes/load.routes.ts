import { Router } from 'express';
import {loadsHandler as handler} from '../handlers';


export default function loadsRouter(): Router {
  return Router()

    .get("/", handler.get)
    // .get("/search/", handler.get)
    .post("/:id", handler.create)
    //coins outflow no debe ser una ruta publica. Se creara un coinst outflow a traves de la ruta POST a /load
    //.post("/coinsOutflow/:id", handler.createCoinsOutflow)
    .delete("/:id", handler.delete)
    .put("/:id", handler.update)
}