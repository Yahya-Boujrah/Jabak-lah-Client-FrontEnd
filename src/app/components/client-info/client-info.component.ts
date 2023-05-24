import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';
import { LoginService } from 'src/app/services/Login.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  constructor(private loginService: LoginService){}

  client !: User;

  ngOnInit(): void {
    this.loginService.currentClient$.subscribe(result => {
      this.client = result;
    })
  }
}
