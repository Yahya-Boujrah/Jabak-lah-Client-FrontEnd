import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/Article.interface';
import { Creditor } from 'src/app/interfaces/Creditor.interface';
import { Debt } from 'src/app/interfaces/Debt.interface';
import { DebtService } from 'src/app/services/Debt.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  article !: Article;
  amount !: number;

  constructor(private router: Router, private debtService: DebtService) {}

  ngOnInit(): void {
    this.article = history.state.article;
  }

  recharge(){
    const debt: Debt = {
      name: `Recharge ${this.article.type}` ,
      creditor: this.article.creditor,
      description: 'Test desc',
      type:'DEBT',
      paid:false,
      article : this.article,
      amount:this.amount

    };
      this.debtService.createDebt$(debt).subscribe();
  }
}
