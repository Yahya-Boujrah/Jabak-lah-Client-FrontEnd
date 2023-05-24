import {Product} from "./product";
import {ProductCategory} from "./product-category";

export interface PaymentInfo{
  amount?: number;
  currency?: string;
  receiptEmail?: string;
}
