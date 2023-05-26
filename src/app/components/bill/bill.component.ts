import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { BillService } from 'src/app/services/Bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  public delete(){
    
  }

  debtsBillResponse !: CustomResponse;

  constructor(private billService: BillService , private router: Router){}

  ngOnInit(): void {
    this.billService.debtsBill$.subscribe(response =>{
     this.debtsBillResponse = response;
    } )
  }

  payBill(){
    this.billService.payBill$.subscribe()

  }
  cancel(){
    this.router.navigate(['navigation']);
  }

}
