import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/interfaces/Article.interface';
import { CustomResponse } from 'src/app/interfaces/Custom-response';
import { Debt } from 'src/app/interfaces/Debt.interface';
import { DebtService } from 'src/app/services/Debt.service';


@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})

export class AbonnementComponent implements OnInit{
  articleId!: number;
  article!: Article;
  added2Bill :boolean = false;

  debtsResponse !: CustomResponse;

  public dataSubject = new BehaviorSubject<any>(null);

  constructor(private debtService: DebtService, private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.article = history.state.article;
    this.articleId = history.state.articleId ;
    console.log(this.articleId)

    this.debtService.debts$(this.articleId).subscribe(response => {
      this.dataSubject.next(response); 
      this.debtsResponse = response;
    });
    
  }

  add2Bill(debts: Debt[] | undefined){
    let ids :number[] = [];
    console.log(debts);
    if (debts!.length > 0){
      debts!.forEach(debt => {ids.push(debt.id as number);
        debt.added2Bill= true;
      });
      this.debtService.bindDebtToBill$(ids).subscribe(
        response => {
          this.dataSubject.next(
            null
          )
          this.debtsResponse = this.dataSubject.value;
        }
      );
      this.added2Bill = true;      
    } 
  } 
  
  cancel(){
    this.router.navigate(['navigation']);

  }
}