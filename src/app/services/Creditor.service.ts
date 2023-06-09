import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, catchError, of, tap } from "rxjs";
import { CustomResponse } from "../interfaces/Custom-response";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CreditorService {
  private readonly apiUrl = 'https://jabak-lah-app.herokuapp.com/api/client';  

  constructor(private http: HttpClient) {}

  creditors$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/creditors`)
    .pipe(
      tap(console.log)
    );
    

}
