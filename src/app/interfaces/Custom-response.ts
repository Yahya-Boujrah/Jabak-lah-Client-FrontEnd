import { Article } from "./Article.interface";
import { Bill } from "./Bill.interface";
import { Creditor } from "./Creditor.interface";
import { Debt } from "./Debt.interface";
import {Product} from "./product";
import {ProductCategory} from "./product-category";
import {Order} from "./Order";
import { User } from "./User.interface";


export interface CustomResponse {
    statusCode: number;
    status: string;
    message: string;
    data: {creditors?: Creditor[], creditor?: Creditor ,
            articles?: Article[], article?: Article,
            debts?: Debt[], debt?: Debt,
            bills?: Bill[],product?: Product,
            products? : Product[],
            pcategory? : ProductCategory,
            pcategories? : ProductCategory[],
            paymentIntent?: any,
            orders?: Order[],
            client?: User

        };
}
