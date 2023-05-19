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
export class BillService {
  private readonly apiUrl = 'http://localhost:8080/api';  

  constructor(private http: HttpClient) {}
  
    
  createBill$ = <Observable<CustomResponse>>
    this.http.post<CustomResponse>(`${this.apiUrl}/client/bill/generate`, null )
    .pipe(
        tap(console.log)
  );

  debtsBill$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/client/bill/debts` )
    .pipe(
        tap(console.log)
    )

  payBill$ = <Observable<CustomResponse>>
    this.http.post<CustomResponse>(`${this.apiUrl}/cmi/payment`, null )
    .pipe(
        tap(console.log)
  )

  history$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUrl}/client/history` )
    .pipe(
        tap(console.log)
    )

  deleteBill$ = <Observable<CustomResponse>>
    this.http.delete<CustomResponse>(`${this.apiUrl}/client/bill/delete`)
    .pipe(
        tap(console.log)
)


}
