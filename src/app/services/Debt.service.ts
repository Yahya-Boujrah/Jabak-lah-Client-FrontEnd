import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, catchError, of, tap } from "rxjs";
import { CustomResponse } from "../interfaces/Custom-response";
import { Debt } from "../interfaces/Debt.interface";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DebtService {
  private readonly apiUrl = 'https://jabak-lah-app.herokuapp.com/api/client';  

  constructor(private http: HttpClient) {}

  generateDebts$ = <Observable<CustomResponse>>
    this.http.post<CustomResponse>(`${this.apiUrl}/articles/debts/generate`, null , httpOptions)
    .pipe(
      tap(console.log)
    );

  debts$ = (articleId: number) => <Observable<CustomResponse>>
      this.http.get<CustomResponse>(`${this.apiUrl}/articles/${articleId}/debts`)
      .pipe(
        tap(console.log)
      )
  
  createDebt$ = (debt: Debt) => <Observable<CustomResponse>>
        this.http.post<CustomResponse>(`${this.apiUrl}/articles/debts/save`, debt, httpOptions)
        .pipe(
          tap(console.log)
        )

  
  bindDebtToBill$ = (debtIds: number[]) => <Observable<CustomResponse>>
    this.http.put<CustomResponse>(`${this.apiUrl}/bind/${debtIds}`, null, httpOptions)
    .pipe(
      tap(console.log)
    )

      
  deleteDebtFromBill$ = (debtId: number) => <Observable<CustomResponse>>
  this.http.put<CustomResponse>(`${this.apiUrl}/debt/delete/${debtId}`, null, httpOptions)
  .pipe(
    tap(console.log)
  )

}
