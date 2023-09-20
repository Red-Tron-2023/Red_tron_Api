import { catchedAsync } from "../utils/utils"
import casinoH from "./casino.handller"
import userH from "./user.handler"
import authH from "./auth.handler"
import userCasinoH from "./userCasino.handler"
import coinsMovementsH from "./coinsMovements.handler"
import playerH from "./player.handler"
import loadsH from "./load.handler"
import historicH from "./historic.handler"


export const casinoHandler = {
    getAll: catchedAsync(casinoH.getAll),
    findOneById: catchedAsync(casinoH.findOneById),
    delete: catchedAsync(casinoH.delete),
    create: catchedAsync(casinoH.create),
    update: catchedAsync(casinoH.update)
};

export const userHandler = {
    getAll: catchedAsync(userH.getAll),
    findOneById: catchedAsync(userH.findOneById),
    delete: catchedAsync(userH.delete),
    create: catchedAsync(userH.create),
    update: catchedAsync(userH.update),
    changePassword: catchedAsync(userH.changePassword)
};

export const authHandler = { logIn: catchedAsync(authH.logIn) };

export const userCasinoHandler = {
    update: catchedAsync(userCasinoH.update),
    create: catchedAsync(userCasinoH.create),
    getAll: catchedAsync(userCasinoH.getAll),

}

export const coinsMovementsHandler = {
    createCoinsInflow: catchedAsync(coinsMovementsH.createCoinsInflow),
    createCoinsOutflow: catchedAsync(coinsMovementsH.createCoinsOutflow),
    getAll: catchedAsync(coinsMovementsH.getAll),
    //getByDate: catchedAsync(coinsMovementsH.getByDate),
    findById: catchedAsync(coinsMovementsH.findOneById),
    update: catchedAsync(coinsMovementsH.update),
    delete: catchedAsync(coinsMovementsH.delete),
}

export const playersHandler = {
    create: catchedAsync(playerH.create),
    get: catchedAsync(playerH.get),
    update: catchedAsync(playerH.update),
    logicalDeletion: catchedAsync(playerH.logicalDeletion),
}

export const loadsHandler = {
    create: catchedAsync(loadsH.create),
    get: catchedAsync(loadsH.get),
    // get: catchedAsync(loadsH.getByQuery),
    findById: catchedAsync(loadsH.findOneById),
    update: catchedAsync(loadsH.update),
    delete: catchedAsync(loadsH.delete),
}

export const historicHandler = {
    getAll: catchedAsync(historicH.getAll),
    findOneById: catchedAsync(historicH.findOneById),
    delete: catchedAsync(historicH.delete),
    create: catchedAsync(historicH.create),
    update: catchedAsync(historicH.update)
};