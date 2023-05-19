import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { Debt } from 'src/app/interfaces/Debt.interface';
import { DebtService } from 'src/app/services/Debt.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit{

  @Input() articleId!: number;

  debtsResponse !: CustomResponse;

  constructor(private debtService: DebtService, private router: Router) {}

  ngOnInit(): void {

    this.articleId = history.state.articleId ;
    console.log(this.articleId)

    this.debtService.debts$(this.articleId).subscribe(response => {
      this.debtsResponse = response;
    });
    
  }

  add2Bill(debt: Debt){
    this.debtService.bindDebtToBill$(debt.id as number).subscribe();
      
  }

  

}
