import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Subject, tap} from "rxjs";
import {User} from "../interfaces/User.interface";
import {AuthResponse} from "../interfaces/Auth-response";
import { CustomResponse } from '../interfaces/Custom-response';
import { Prospect } from '../interfaces/prospect.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private client$ = new BehaviorSubject<any>(null);
  // currentClient$ = this.client$.asObservable();

  private readonly URL : string = 'http://localhost:8080/api/auth';

  constructor(private http : HttpClient) { }

  authenticate(username : string, password : string){
    return this.http.post<AuthResponse>(`${this.URL}/authenticate`, { username : username, password : password},httpOptions )
      .pipe(tap(response =>{
        const client : User = response.user;
        // this.client$.next(client);
      }));
  }

  register(prospect : Prospect){
    return this.http.post<CustomResponse>(`${this.URL}/register`,prospect, httpOptions )
      .pipe(tap(
        console.log
      ));
  }

  changePassword(password: string){
    return this.http.put<CustomResponse>('http://localhost:8080/api/client/changePassword', password)
      .pipe(
        tap(console.log)
      );

  }

  isPasswordChanged(){
    return this.http.get<CustomResponse>(`${this.URL}/isPasswordChanged`).pipe(
      tap(console.log)
    );
  }
}
