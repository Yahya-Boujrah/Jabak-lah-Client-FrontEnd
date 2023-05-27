import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {CheckoutService} from "../../services/checkout.service";
import {SecretKeyService} from "../../services/secret-key.service";


/// <reference path="../../../typings.d.ts" />
@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent implements OnInit{


  stripe = Stripe(environment.stripePublishableKey);

  @Input() secretKey !: string;

  @Input() amount !: number;

  cardElement : any;

  displayError : any;

  elements !: any;

  constructor(private checkoutService : CheckoutService, private secretKeyService : SecretKeyService) {
  }

  ngOnInit(): void {
    // this.secretKeyService.mySubject.subscribe(data => {
    //   this.secretKey = data;
    // })
    if (this.secretKey) {
      console.log(this.secretKey);
      this.setupStripePaymentForm();
    }

  }



  private setupStripePaymentForm() {
    const appearance = {
      theme: 'night',
      labels: 'floating'
    };
    this.elements = this.stripe.elements({clientSecret: this.secretKey, appearance : appearance});
    console.log(this.secretKey);
    this.cardElement = this.elements.create('payment');
    this.cardElement.mount('#card-element');
    this.cardElement.on('change', (event : any) => {
      this.displayError = document.getElementById('card-errors');

      if (event.complete){
        this.displayError.textContent = "";
      } else if (event.error){
        this.displayError.textContent = event.error.mssage;
      }
    });
  }

  onConfirm(){
    this.stripe.confirmPayment({elements : this.elements,
      confirmParams: {
      return_url: 'https://example.com',
    }});
    this.checkoutService.chargerSolde(Number(this.amount)).subscribe(response => {
        console.log(response?.data?.message);
      }
    );
  }
}
