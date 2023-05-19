import { Debt } from "./Debt.interface";

export interface Bill {
    id?:number;
    totalAmount?:number;
    createdAt?:Date;
    client?:any;
    debts?: Debt[];
}