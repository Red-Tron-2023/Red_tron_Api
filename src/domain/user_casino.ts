import { Base } from "../utils/common";
import dotenv from "dotenv";
import { User } from "./user";
import { Casino } from "./casino";

dotenv.config();

export interface User_Casino extends Base {
    user: User;
    casino: Casino;
    status: User_CasinoStatus;
    debits: number;
    credits: number;
    coins: number;
    creditCoins: number;
}

export enum User_CasinoStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DISABLED = 'DISABLED'
}