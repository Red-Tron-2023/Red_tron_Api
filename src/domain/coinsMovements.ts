import { Base } from "../utils/common";
import { Historic } from "./historic";

export interface CoinsMovements extends Base {
    inflow_qty: number
    outflow_qty: number
    coins_balance: number
    historic: Historic
}