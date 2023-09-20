import { Between, Repository } from "typeorm";
import { getConnection } from "../db";
import { BaseError } from "../utils/errors/error";
import { StatusCodes } from "http-status-codes";
import { HistoricEntity } from "../models/historic.model";
import { HistoricRepository } from "../domain/repositories/historic.repository";
import { Historic, HistoricCategory } from "../domain/historic";

export class HistoricDAO implements HistoricRepository {

    repository: Repository<HistoricEntity>

    constructor(){
        getConnection().then(connection => {
            this.repository = connection.getRepository(HistoricEntity)
        })
    }

    async search(category?: HistoricCategory, start?:string, end?: string): Promise<Historic[]> {
        
        const query = this.repository
        .createQueryBuilder("historic")

        if(category = HistoricCategory.coinsInflow){
            query      
            .leftJoinAndSelect("historic", "coinsMovements")
            .leftJoinAndSelect("coinsMovements.user", "admin")
            .leftJoinAndSelect("coinsMovements.userCasinoId", "user_casino")
            .leftJoinAndSelect("user_casino.casino", "casino")
            .leftJoinAndSelect("user_casino.user", "teller")
            .select([
                "historic",
                "coinsMovements.id",
                "admin.id",
                "admin.username",
                "casino.id",
                "casino.name",
                "teller.id",
                "teller.username",
                ]);
        }

        else if(category = HistoricCategory.load){
            query      
            .leftJoinAndSelect("historic", "load")
            .leftJoinAndSelect("load.user_casino_id", "user_casino")
            .leftJoinAndSelect("user_casino.casino", "casino")
            .leftJoinAndSelect("user_casino.user", "teller")
            .leftJoinAndSelect("load.player", "player")
            .select([
                "historic",
                "load.id",
                "load.coins_outflow_qty",
                "load.status",
                "casino.id",
                "casino.name",
                "teller.id",
                "teller.username",
                "player.nickname",
                ]);
        }

        else if(category = HistoricCategory.withdrawal){
            query      
            .leftJoinAndSelect("historic", "withdrawal")
            .leftJoinAndSelect("withdrawal.user_casino_id", "user_casino")
            .leftJoinAndSelect("user_casino.casino", "casino")
            .leftJoinAndSelect("user_casino.user", "teller")
            .leftJoinAndSelect("withdrawal.player", "player")
            .select([
                "historic",
                "withdrawal.id",
                "load.coins_outflow_qty",
                "withdrawal.status",
                "casino.id",
                "casino.name",
                "teller.id",
                "teller.username",
                "player.nickname",
                ]);
        }
      

    if (start) {
      const startDate = new Date(start);
      query.andWhere('historic.createdAt >=  :startDate', { startDate })
    }
    if(end){
      let endDate = new Date(end);
      endDate.setUTCHours(23, 59, 59, 999);    
      query.andWhere('historic.createdAt <=  :endDate', { endDate })
    }

    query.orderBy("historic.createdAt", "DESC");

    return await query.getMany();

    }
    async create(item: Historic): Promise<Historic> {
        return await this.repository.save(item) as Historic;;
    }
    async read(id: string): Promise<Historic> {
        return (await this.repository.findOneBy({ id: id })) as Historic;
    }
    update(id: string, item: Historic): Promise<Historic> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}