import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
  dataSubject = new BehaviorSubject<any>(null);

  constructor(private billService: BillService , private router: Router){}

  ngOnInit(): void {
    this.billService.debtsBill$.subscribe(response =>{
      this.dataSubject.next(response); 
     this.debtsBillResponse = { ...response, data: { debts: response.data.debts?.reverse() } };
    } )
  }

  payBill(){
    this.billService.payBill$.subscribe(response => {
      this.dataSubject.next(null);
      this.debtsBillResponse = this.dataSubject.value;
    })

  }
  cancel(){
    this.router.navigate(['navigation']);
  }

}
