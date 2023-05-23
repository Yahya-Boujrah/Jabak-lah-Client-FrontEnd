import { Component, OnInit } from '@angular/core';
import { CustomResponse } from '../../interfaces/Custom-response';
import { CreditorService } from '../../services/Creditor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DebtService } from '../../services/Debt.service';
import { take } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { BillService } from '../../services/Bill.service';

@Component({
  selector: 'app-creditors',
  templateUrl: './creditors.component.html',
  styleUrls: ['./creditors.component.css'],
})
export class CreditorsComponent implements OnInit {

  creditorResponse !: CustomResponse;


  constructor(private creditorService : CreditorService, private debtService: DebtService, 
     private router : Router, private route:ActivatedRoute, private billService: BillService) {}

  ngOnInit(): void {
    
    this.creditorService.creditors$.subscribe(response =>{
      this.creditorResponse = response
    })

  }
  recap(){
    this.router.navigate(['bill-recap'] );
  }

  history(){
    this.router.navigate(['history'] );
  }


}
