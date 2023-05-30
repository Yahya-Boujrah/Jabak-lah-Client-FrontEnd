import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { Debt } from 'src/app/interfaces/Debt.interface';
import { BillService } from 'src/app/services/Bill.service';
import { DebtService } from 'src/app/services/Debt.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  faTrash =faTrash;

  deleteDebt !: Debt;

  debtsBillResponse !: CustomResponse;
  dataSubject = new BehaviorSubject<any>(null);

  constructor(private billService: BillService , private router: Router, private debtService: DebtService){}

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

  delete(debt: Debt){
    this.debtService.deleteDebtFromBill$(debt.id as number).subscribe(response => {
      this.dataSubject.next(
        {
          ...response, data:
            { debts: this.dataSubject.value.data.debts.filter((db: { id: number | undefined; }) => db.id !== debt.id) }
        }
      )
      this.debtsBillResponse = this.dataSubject.value;
    })
  }

  cancel(){
    this.router.navigate(['navigation']);
  }

  openModal(debt : Debt){
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    this.deleteDebt = debt;
    button.setAttribute('data-bs-target', '#deleteModal');

    container?.appendChild(button);
    button.click();
  }

}
