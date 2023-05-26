import { Component, OnInit } from '@angular/core';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { User } from 'src/app/interfaces/User.interface';
import { ClientService } from 'src/app/services/Client.service';


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  constructor(private clientService: ClientService){}

  client ?: User;

  ngOnInit(): void {
    this.clientService.client$.subscribe(result => {
      this.client = result.data.client;
    })
  }
}
