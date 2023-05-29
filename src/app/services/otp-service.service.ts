import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../interfaces/Custom-response";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl : string = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  confirmPayment(otpCode : string){
    return this.httpClient.post<CustomResponse>(`${this.baseUrl}/cmi/confirm`,otpCode).pipe(
      tap(console.log)
    );
  }
}
