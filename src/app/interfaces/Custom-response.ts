import { Article } from "./Article.interface";
import { Bill } from "./Bill.interface";
import { Creditor } from "./Creditor.interface";
import { Debt } from "./Debt.interface";


export interface CustomResponse {
    statusCode: number;
    status: string;
    message: string;
    data: {creditors?: Creditor[], creditor?: Creditor , 
            articles?: Article[], article?: Article,
            debts?: Debt[], debt?: Debt
            bills?: Bill[]
        
        };  
}