import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaymentInfo} from "../interfaces/payment-info";
import {Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {CustomResponse} from "../interfaces/Custom-response";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private paymentUrl = environment.apiUrl + '/cmi/payment-intent'

  constructor(private httpClient : HttpClient) { }

  createPaymentIntent(paymentInfo : PaymentInfo) : Observable<CustomResponse>{
    return this.httpClient.post<CustomResponse>(this.paymentUrl, paymentInfo).pipe(
      tap(console.log)
    );
  }
}
