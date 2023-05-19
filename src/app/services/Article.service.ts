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
  private readonly apiUrl = 'http://localhost:8080/api/client';  

  constructor(private http: HttpClient) {}

  articles$ = (id : number) => <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/creditors/${id}/articles`)
    .pipe(
      tap(console.log)
    );
    

//   article$ =  (agentId: number) => <Observable<CustomResponse>>
//   this.http.get<CustomResponse>(`${this.apiUrl}/get/${agentId}`)
//   .pipe(
//     tap(console.log),
//     catchError(() => {
//       return of('error')
//     })
//   );

}
