import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Validator from 'jsonschema';
import { isValidUUID } from "../utils/functions/comprobarUUID";
import { BaseError } from '../utils/errors/error';
export const validateSchema = (schema) =>{
    
    return function (req: Request, res: Response, next: NextFunction)  {
      const {id} = req.params;
      const isUUID = id ? isValidUUID(req.params.id) : true;
      if(!isUUID) throw new BaseError("Invalid UUID of params", StatusCodes.BAD_REQUEST, "Use a valid uuid format")
      const validation = Validator.validate(req.body, schema);
      if (!validation.valid) 
        throw new BaseError("Invalid request body", 
        StatusCodes.BAD_REQUEST, 
        validation.errors.reduce((acc, error) =>  acc + error.stack + '--' , '--')
        );
      next();
    }
  }
  