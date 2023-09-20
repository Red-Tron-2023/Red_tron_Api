import { And, Between, Repository } from "typeorm";
import { getConnection } from "../db";
import { BaseError } from "../utils/errors/error";
import { StatusCodes } from "http-status-codes";
import { CoinsMovementsRepository } from "../domain/repositories/coinsMovements.repository";
import { CoinsMovementsEntity } from "../models/coinsMovements.model";
import { CoinsMovements } from "../domain/coinsMovements";
import { User } from "../domain/user";

export class CoinsMovementsDAO implements CoinsMovementsRepository {
  repository: Repository<CoinsMovementsEntity>;
  user: User;
  userCasinoId: string;
  inflow_qty: number;
  coins_balance: number;
  outflow_qty: number;

  constructor() {
    getConnection().then((connection) => {
      this.repository = connection.getRepository(CoinsMovementsEntity);
    });
  }
  createInflow(coinsMovement: CoinsMovements): Promise<CoinsMovements> {
    throw new Error("Method not implemented.");
  }
  create(item: CoinsMovements): Promise<CoinsMovements> {
    throw new Error("Method not implemented.");
  }

  async createCoinsFlow(coinsMovement: CoinsMovements): Promise<CoinsMovements> {
    const newCoinsMovement = await this.repository.save(coinsMovement);
    const result = await this.repository
      .createQueryBuilder("coinsMovements")
      .leftJoinAndSelect("coinsMovements.user", "user")
      .leftJoinAndSelect("coinsMovements.userCasinoId", "user_casino")
      .where("coinsMovements.id = :id", { id: newCoinsMovement.id })
      .select([
        "coinsMovements",
        "user.id",
        "user.username",
        "user.email",
        "user.role",
        "user_casino.id",
      ])
      .getOne();
    return result as CoinsMovements;
  }
  async read(id: string): Promise<CoinsMovements> {
    return (await this.repository.findOneBy({ id: id })) as CoinsMovements;
  }
  async update(id: string, item: CoinsMovements): Promise<CoinsMovements> {
    const existingCoinsMovements = await this.repository.findOneBy({ id: id });
    if (!existingCoinsMovements) throw new BaseError('No se encuentra el Coins Movement', StatusCodes.NOT_FOUND);

    // const prevCoinsMovements = new CoinsMovementsEntity();
    // prevCoinsMovements.id = existingCoinsMovements.id;
    // prevCoinsMovements.user = existingCoinsMovements.user;
    // prevCoinsMovements.userCasinoId = existingCoinsMovements.userCasinoId
    // prevCoinsMovements.historic = existingCoinsMovements.historic;
    // prevCoinsMovements.inflow_qty = existingCoinsMovements.inflow_qty;
    // prevCoinsMovements.outflow_qty = existingCoinsMovements.outflow_qty;
    // prevCoinsMovements.coins_balance = Math.floor(existingCoinsMovements.coins_balance) - existingCoinsMovements.inflow_qty + Math.floor(item.inflow_qty)

    const updatedCoinsMovements = Object.assign({}, existingCoinsMovements, item);
    await this.repository.save(updatedCoinsMovements);
    
    const result = await this.repository
    .createQueryBuilder("coinsMovements")
    .leftJoinAndSelect("coinsMovements.user", "user")
    .leftJoinAndSelect("coinsMovements.userCasinoId", "user_casino")
    .where("coinsMovements.id = :id", { id })
    .select([
      "coinsMovements",
      "user.id",
      "user.username",
      "user.email",
      "user.role",
      "user_casino.id",
    ])
    .getOne();
    return result as CoinsMovements;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete({ id: id });
    return result.affected ? true : false;
  }

  async findLastInputByUserCasinoId(userCasinoId: string): Promise<CoinsMovements> {
    const lastInput = await this.repository.findOne({
      where: {
        userCasinoId: {
          id: userCasinoId
        }
      },
      order: { createdAt: 'DESC' }
    });

    //if (!lastInput) throw new BaseError('No se encuentra el Movimiento de Fichas', StatusCodes.NOT_FOUND);
    return lastInput as CoinsMovementsEntity;
  }


  async search(adminId?: string,tellerId? :string, casinoId?: string, userCasinoId?: string, date?: string, end? : string): Promise<CoinsMovements[]> {
    
      const query = this.repository
        .createQueryBuilder("coinsMovements")
        .leftJoinAndSelect("coinsMovements.user", "user")
        .leftJoinAndSelect("coinsMovements.userCasinoId", "user_casino")
        .leftJoinAndSelect("user_casino.casino", "casino")
        .leftJoinAndSelect("user_casino.user", "user_casino_user")
        .select([
          "coinsMovements",
          "user.id",
          "user.username",
          "user.email",
          "user.role",
          "user_casino.id",
          "casino.id",
          "casino.name",
          "user_casino_user.id",
          "user_casino_user.username"
        ]);
      
    if(adminId) query.andWhere("user.id = :adminId", { adminId })
    if(tellerId) query.andWhere("user_casino_user.id = :tellerId", { tellerId })
    if(casinoId) query.andWhere("casino.id = :casinoId", {casinoId})
    if(userCasinoId) query.andWhere("user_casino.id = :userCasinoId", {userCasinoId})
    if (date) {
      const startDate = new Date(date);
      query.andWhere('coinsMovements.createdAt >=  :startDate', { startDate })
    }
    if(end){
      let endDate = new Date(end);
      endDate.setUTCHours(23, 59, 59, 999);    
      query.andWhere('coinsMovements.createdAt <=  :endDate', { endDate })
    }

    query.orderBy("coinsMovements.createdAt", "DESC");

    return await query.getMany();

  }


}