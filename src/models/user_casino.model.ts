import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CasinoEntity } from "./casino.model";
import { UserEntity } from "./user.model";
import { User_Casino, User_CasinoStatus } from "../domain/user_casino";
import { WithdrawalEntity } from "./withdrawal.model";
import { LoadEntity } from "./load.model";
import { PlayerEntity } from "./player.model";
import { Player } from "../domain/player";
import { CoinsMovementsEntity } from "./coinsMovements.model";
import { CoinsMovements } from "../domain/coinsMovements";
import { User } from "../domain/user";
import { Casino } from "../domain/casino";

@Entity({name: "user_casino"})
export class User_Casino_Entity implements User_Casino{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name:"debits", type: "numeric", scale: 0, nullable: true, default: 0})
    debits: number;

    @Column({name:"status", type: "enum", enum: User_CasinoStatus, default: User_CasinoStatus.ACTIVE})
    status: User_CasinoStatus;

    @Column({name:"credits", type: "numeric", scale: 0, nullable: true, default: 0})
    credits: number;

    @Column({name:"coins", type: "numeric", scale: 0, nullable: false, default: 0})
    coins: number;

    @Column({name:"credit_coins", type: "numeric", scale: 0, nullable: false, default: 0})
    creditCoins: number;

    @Column({name: "created_at", type: "timestamp", nullable: false, default: () => "now()",})
    createdAt: Date;

    @ManyToOne(()=>UserEntity, (user) => user.user_casino)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user: User;

    @ManyToOne(()=>CasinoEntity, (casino) => casino.user_casino)
    @JoinColumn({name: 'casino_id', referencedColumnName: 'id'})
    casino: Casino;

    //Relacion un user_casino tiene muchos withdrawal y withdrawal tiene un solo user_casino
    @OneToMany(() => WithdrawalEntity, (withdrawal)=> withdrawal.user_casino)
    withdrawal: WithdrawalEntity[];

    //Relacion un user_casino tiene muchos load y load tiene un solo user_casino
    @OneToMany(() => LoadEntity, (load)=> load.user_casino)
    load: LoadEntity[];

    @OneToMany(() => PlayerEntity, (player)=> player.user_casino)
    player: Player[];

    @OneToMany(() => CoinsMovementsEntity, (coinsMovements) => coinsMovements.userCasinoId)
    coinsMovements: CoinsMovements[];

}