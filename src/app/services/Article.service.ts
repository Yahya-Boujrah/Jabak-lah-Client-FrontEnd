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
export class ArticleService {
  private readonly apiUrl = 'https://jabak-lah-app.herokuapp.com/api/client';  

  constructor(private http: HttpClient) {}

  articles$ = (id : number) => <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/creditors/${id}/articles`)
    .pipe(
      tap(console.log)
    );
    
}
