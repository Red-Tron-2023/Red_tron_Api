import { Between, Repository } from "typeorm";
import { LoadRepository } from "../domain/repositories/load.repository";
import { LoadEntity } from "../models/load.model";
import { getConnection } from "../db";
import { Load } from "../domain/load";
import { BaseError } from "../utils/errors/error";
import { StatusCodes } from "http-status-codes";

export class LoadDAO implements LoadRepository {
  repository: Repository<LoadEntity>;

  constructor() {
    getConnection().then((connection) => {
      this.repository = connection.getRepository(LoadEntity);
    });
  }
    
  async create(item: Load): Promise<Load> {
    return (await this.repository.save(item)) as Load;
  }
  async read(id: string): Promise<Load> {
    return (await this.repository.findOneBy({ id: id })) as Load;
  }
  async update(id: string, item: Load): Promise<Load> {
    const existingLoad = await this.repository.findOneBy({ id: id });
    if (item === null || Object.keys(item).length === 0) {
      throw new BaseError(
        "No se proporcionó un objeto para actualizar.",
        StatusCodes.BAD_REQUEST
      );
    }
    const updatedLoad = Object.assign({}, existingLoad, item);
    return (await this.repository.save(updatedLoad)) as Load;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete({ id: id });
    return result.affected ? true : false;
  }

  async search(userCasinoId?: string , playerId?: string , casinoId?: string, tellerId?: string, start?: string, end?:string) : Promise<Load[]>{
    const query = this.repository
        .createQueryBuilder("loads")
        .leftJoinAndSelect("loads.user_casino", "userCasino")
        .leftJoinAndSelect("loads.player", "player")
        .leftJoinAndSelect("userCasino.user", "teller")
        .leftJoinAndSelect("userCasino.casino", "casino")
        .select([
          "loads",
          "player.id",
          "player.nickname",
          "userCasino.id",
          "userCasino.credits",
          "teller.id",
          "teller.username",
          "casino.id",
          "casino.name",
        ])
        .orderBy("loads.createdAt", "DESC");
      
    if(userCasinoId) query.andWhere("userCasino.id = :userCasinoId", { userCasinoId })
    if(tellerId) query.andWhere("teller.id = :tellerId", { tellerId })
    if(casinoId) query.andWhere("casino.id = :casinoId", {casinoId})
    if (start) {
      const startDate = new Date(start);
      query.andWhere('coinsMovements.createdAt >=  :startDate', { startDate })
    }
    if(end){
      let endDate = new Date(end);
      endDate.setUTCHours(23, 59, 59, 999);    
      query.andWhere('coinsMovements.createdAt <=  :endDate', { endDate })
    }

    //query.orderBy("coinsMovements.createdAt", "DESC");

    return await query.getMany();
  }

  async searchDate(query?: Date): Promise<Load[]> {
    if (!query) {
      return (await this.repository.find()) as Load[];
    }

    const startDate = new Date(query.getFullYear(),query.getMonth(),query.getDate(),0,0,0);
    const endDate = new Date(query.getFullYear(),query.getMonth(),query.getDate(),23,59,59);

    return (await this.repository.find({where: { createdAt: Between(startDate, endDate) }})) as Load[];
  }
  
}
