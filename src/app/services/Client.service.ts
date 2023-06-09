import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, catchError, of, tap } from "rxjs";
import { CustomResponse } from "../interfaces/Custom-response";
import { Debt } from "../interfaces/Debt.interface";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly apiUrl = 'https://jabak-lah-app.herokuapp.com//api/client';  

  constructor(private http: HttpClient) {}


  client$ = <Observable<CustomResponse>>
      this.http.get<CustomResponse>(`${this.apiUrl}/infos`)
      .pipe(
        tap(console.log)
      )
 
  
}
