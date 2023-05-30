import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  operator!: string ;

  constructor(private router: Router, private debtService: DebtService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.article = history.state.article;
    this.operator = this.article.name as string;
  }

  recharge(rechargeForm: NgForm){
    const debt: Debt = {
      name: `Recharge ${this.article.type}` ,
      creditor: this.article.creditor,
      description: 'Recharge '+ rechargeForm.value.type,
      type: 'DEBT',
      paid: false,
      article : this.article,
      amount: this.amount
    };
      this.debtService.createDebt$(debt).subscribe();
      rechargeForm.reset();
  }


  cancel(){
    this.router.navigate(['navigation']);
  }

}