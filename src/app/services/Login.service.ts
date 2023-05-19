import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, tap} from "rxjs";
import {User} from "../interfaces/User.interface";
import {AuthResponse} from "../interfaces/Auth-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new Subject<User>();

  private readonly URL : string = 'http://localhost:8080/api/auth';

  constructor(private http : HttpClient) { }

  authenticate(username : string, password : string){
    return this.http.post<AuthResponse>(`${this.URL}/authenticate`, { username : username, password : password})
      .pipe(tap(response =>{
        const user : User = response.user;
        this.user.next(user);
      }));
  }
}
