import { Base } from "../utils/common";
import dotenv from "dotenv";

dotenv.config();

export interface Historic extends Base {
    entity: HistoricCategory;
}

export enum HistoricCategory {load = 'load', withdrawal = 'withdrawal', coinsInflow = 'coinsInflow'}
