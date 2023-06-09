import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService{

  private baseUrl = 'https://jabak-lah-app.herokuapp.com/api/orders';

  constructor(private httpClient : HttpClient) { }


  getOrders(){
    return this.httpClient.get(`${this.baseUrl}/get`).pipe(
      tap(console.log)
    );
  }

}
