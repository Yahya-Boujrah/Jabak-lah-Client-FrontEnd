import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

  public dataSubject = new BehaviorSubject<any>(null);

  constructor(private debtService: DebtService, private router: Router) {}

  ngOnInit(): void {

    this.articleId = history.state.articleId ;
    console.log(this.articleId)

    this.debtService.debts$(this.articleId).subscribe(response => {
      this.dataSubject.next(response); 
      this.debtsResponse = response;
    });
    
  }

  // add2Bill(){
  //   this.debtsResponse?.data?.debts!.forEach(debt => {
  //     this.debtService.bindDebtToBill$(debt.id as number).subscribe(response => {
  //       this.dataSubject.next(
  //         {...response, data: 
  //           { debts: this.dataSubject.value.data.debts.filter( (db: { id: number | undefined; }) => db.id !== debt.id)}
  //         }
  //       )
  //       this.debtsResponse = this.dataSubject.value;
  //   })
  //   });
  
  add2Bill(debts: Debt[] | undefined){
    let ids :number[] = [];
    console.log(debts);
    if (debts!.length > 0){
      debts!.forEach(debt => ids.push(debt.id as number));
      console.log(ids);
      this.debtService.bindDebtToBill$(ids).subscribe();      
    } 
  }  
}