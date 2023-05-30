import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/Article.interface';
import { Debt } from 'src/app/interfaces/Debt.interface';
import { DebtService } from 'src/app/services/Debt.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  don !: number ;
  donatorName !: string ;
  article!: Article;

  constructor(private debtService: DebtService, private router: Router,  private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.article = history.state.article;
  }

  donate(){
    const debt: Debt = {
      name: `Charity debt` ,
      creditor: this.article.creditor,
      description: 'donation for '+ this.article.creditor,
      type: 'DEBT',
      paid: false,
      article :  this.article,
      amount: this.don
    };
      this.debtService.createDebt$(debt).subscribe();
  
  }


  cancel(){
    this.router.navigate(['navigation']);
  }


}
