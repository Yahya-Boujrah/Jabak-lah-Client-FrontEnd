import { Component, OnInit } from '@angular/core';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { BillService } from 'src/app/services/Bill.service';

@Component({
  selector: 'app-bill-history',
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.css']
})
export class BillHistoryComponent implements OnInit {

  billHistory !: CustomResponse;

  constructor(private billService: BillService){}

  ngOnInit(): void {
    this.billService.history$.subscribe(response =>{
        this.billHistory = response;
    })
  }

}
