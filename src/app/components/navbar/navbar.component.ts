import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/Bill.service';
import { DebtService } from 'src/app/services/Debt.service';
import {SecretKeyService} from "../../services/secret-key.service";
import {CheckoutService} from "../../services/checkout.service";
import {NgForm} from "@angular/forms";

import { faFile, faCircleInfo, faRightFromBracket , faRectangleList, faNewspaper, faCartShopping} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  faFile = faFile;
  faCircleInfo= faCircleInfo;
  faRightFromBracket=faRightFromBracket;
  faRectangleList=faRectangleList;
  faNewspaper=faNewspaper;
  faCartShopping=faCartShopping;
  
  secretKey !: string;

  constructor(private debtService: DebtService,
              private router : Router,
              private route: ActivatedRoute,
              private billService: BillService,
              private secretKeyService : SecretKeyService,
              private checkoutService : CheckoutService) {}



  onSubmit(form : NgForm){
    this.checkoutService.createPaymentIntent({amount : form.value.amount * 10, currency:'USD', receiptEmail:'mouadrabihi07@gmail.com'}).subscribe(
      response => {
        this.secretKey = JSON.parse(response?.data?.paymentIntent).client_secret;
        console.log(this.secretKey);
        // this.secretKeyService.mySubject.next(this.secretKey);
      });
  }

  creditors(){
    this.router.navigate(['navigation']);
  }
  products(){
    this.router.navigate(['delivery'], {relativeTo: this.route});
  }
  bill(){
    this.router.navigate(['bill'], {relativeTo: this.route});
  }

  orders(){
    this.router.navigate(['orders'], {relativeTo: this.route});
  }
  LogOut(){
    this.billService.deleteBill$.subscribe();
    sessionStorage.removeItem('token');
    this.router.navigate(['login'] );
  }
  billHistory(){
    this.router.navigate(['history'], {relativeTo: this.route});
  }
  infos(){
    this.router.navigate(['infos'], {relativeTo: this.route});
  }

}
