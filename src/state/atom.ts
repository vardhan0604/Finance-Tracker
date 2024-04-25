import { atom } from "recoil";

export const userState=atom({
    key:'user',
    default:""
})

export const accountsState= atom({
    key:'accounts',
    default:[]
})
export const transactionsState= atom({
    key:'transactions',
    default: [] as string[]
})

