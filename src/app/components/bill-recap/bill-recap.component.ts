import { Component, OnInit } from '@angular/core';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { BillService } from 'src/app/services/Bill.service';

@Component({
  selector: 'app-bill-recap',
  templateUrl: './bill-recap.component.html',
  styleUrls: ['./bill-recap.component.css']
})
export class BillRecapComponent implements OnInit {

  debtsBillResponse !: CustomResponse;

  constructor(private billService: BillService){}

  ngOnInit(): void {
    this.billService.debtsBill$.subscribe(response =>{
     this.debtsBillResponse = response;
    } )
  }

  payBill(){
    this.billService.payBill$.subscribe()

  }
}
