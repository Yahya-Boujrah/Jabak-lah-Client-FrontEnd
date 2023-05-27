import {Component, Input, OnInit} from '@angular/core';
import {CheckoutService} from "../../services/checkout.service";
import {environment} from "../../../environments/environment";


/// <reference path="../../../typings.d.ts" />
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  stripe = Stripe(environment.stripePublishableKey);


  secretKey : string = environment.stripePublishableKey;

  cardElement : any;

  displayError : any;

  @Input() amount !: any;

  constructor(private checkoutService : CheckoutService) {
  }

  ngOnInit(): void {
    this.setupStripePaymentForm();
  }


  private setupStripePaymentForm() {
    var elements = this.stripe.elements();
    this.cardElement = elements.create('card');
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

  onSubmit(){
    this.checkoutService.createPaymentIntent({amount : this.amount * 10, currency:'USD', receiptEmail:'mouadrabihi07@gmail.com'}).subscribe(
      response => {

        // this.test = JSON.parse(response?.data?.paymentIntent).client_secret;

        this.stripe.confirmCardPayment(JSON.parse(response?.data?.paymentIntent).client_secret,
          {
            payment_method: {
              card: this.cardElement}
          })
      }
    )
  }


}
