import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Product} from "../interfaces/product";
import {CustomResponse} from "../interfaces/Custom-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = 'https://jabak-lah-app.herokuapp.com/api/products';

  constructor(private httpClient : HttpClient) { }

  getProductCategories(): Observable<CustomResponse> {

    return this.httpClient.get<CustomResponse>(`${this.baseUrl}/getCategories`).pipe(
      tap(console.log)
    );
  }

  getProductList(id : number) : Observable<CustomResponse>{
    const searchUrl = `${this.baseUrl}/search/findByCategoryId/${id}`;

    return this.httpClient.get<CustomResponse>(searchUrl).pipe(
      tap(console.log)
    );
  }

  getProduct(id : number) : Observable<CustomResponse>{
    return this.httpClient.get<CustomResponse>(`${this.baseUrl}/${id}`).pipe(
      tap(console.log)
    );
  }

  searchProducts(keyword: string) {
    const searchUrl = `${this.baseUrl}/search/${keyword}`;

    return this.httpClient.get<CustomResponse>(searchUrl).pipe(
      tap(console.log)
    );

  }

  addToBill(product : Product){
    return this.httpClient.post<CustomResponse>('https://jabak-lah-app.herokuapp.com/api/client/addProduct',product).pipe(
      tap(console.log)
    );
  }

}
