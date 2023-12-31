import { Repository } from "typeorm";
import { UserCasinoRepository } from "../domain/repositories/userCasino.repository";
import { User_Casino_Entity } from "../models/user_casino.model";
import { User_Casino } from "../domain/user_casino";
import { BaseError } from "../utils/errors/error";
import { getConnection } from "../db";
import { StatusCodes } from "http-status-codes";

export class UserCasinoDAO implements UserCasinoRepository {
  
  repository: Repository<User_Casino_Entity>;

  constructor() {
    getConnection().then((connection) => {
      this.repository = connection.getRepository(User_Casino_Entity);
    });
  }
  async create(item: User_Casino): Promise<User_Casino> {
    const saveUserCasino = await this.repository.save(item);
    const userCasino = await this.repository
      .createQueryBuilder("user_casino")
      .leftJoinAndSelect("user_casino.user", "user")
      .leftJoinAndSelect("user_casino.casino", "casino")
      .where("user_casino.id = :id", { id: saveUserCasino.id })
      .select([
        "user_casino",
        "user.id",
        "user.username",
        "user.email",
        "casino.id",
        "casino.name"
      ])
      .getOne();
    return userCasino as User_Casino;
  }

  async read(id: string): Promise<User_Casino> {
    
    const userCasino =  await this.repository
    .createQueryBuilder("user_casino")
        .leftJoinAndSelect("user_casino.user", "user")
        .leftJoinAndSelect("user_casino.casino", "casino")
        .whereInIds(id)
        .select([
          "user_casino",
          "user.id",
          "user.username",
          "user.email",
          "user.role",
          "casino.id",
          "casino.name"
        ])
        .getOne();

  if(!userCasino) throw new BaseError('No se encuentra el userCasino', StatusCodes.NOT_FOUND);

  return {...userCasino} as User_Casino;

  }

  async update(id: string, item: User_Casino): Promise<User_Casino> {
    const userCasino = await this.repository.findOneBy({id: id});
    
    if (item === null|| Object.keys(item).length === 0) {
      throw new BaseError('No se proporcionó un objeto para actualizar.', StatusCodes.BAD_REQUEST);
    }
    const updatedUserCasino = Object.assign({},userCasino, item);
    return {...await this.repository.save(updatedUserCasino)} as User_Casino;
  }
  
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  
  async search(userId?: string, casinoId?: string): Promise<User_Casino[]> {
    
  const queryBuilder  = this.repository
  .createQueryBuilder("user_casino")
  .leftJoinAndSelect("user_casino.user", "user")
  .leftJoinAndSelect("user_casino.casino", "casino")
  .select([
    "user_casino",
    "user.id",
    "user.username",
    "user.email",
    "casino.id",
    "casino.name"
  ])
  if (userId) {
    queryBuilder.andWhere("user.id = :userId", { userId });
  }

  if (casinoId) {
    queryBuilder.andWhere("casino.id = :casinoId", { casinoId });
  }

  const result = await queryBuilder.getMany();

  return result;
     
}

async findById(userCasinoId: string): Promise<User_Casino> {
  const userCasino =  await this.repository
  .createQueryBuilder("user_casino")
      .leftJoinAndSelect("user_casino.user", "user")
      .leftJoinAndSelect("user_casino.casino", "casino")
      .whereInIds(userCasinoId)
      .select([
        "user_casino",
        "user.id",
        "user.username",
        "user.email",
        "casino.id",
        "casino.name"
      ])
      .getOne();
  if(!userCasino) throw new BaseError('No se encuentra el userCasino', StatusCodes.NOT_FOUND);
  return {...userCasino} as User_Casino;
}

  searchDate: (query?: Date | undefined) => Promise<User_Casino[]>;
}
