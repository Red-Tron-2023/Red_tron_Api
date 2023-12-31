import { Base } from "../utils/common";

export interface Load extends Base {
    //debits: number
    coins_outflow_qty: number
    status: LoadStatus
    transfer_url: string
}

export enum LoadStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED'
  }