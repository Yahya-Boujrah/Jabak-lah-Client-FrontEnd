import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgOtpInputModule} from 'ng-otp-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { ArticlesComponent } from './components/creditors/articles/articles.component';
import { LoginComponent } from './components/login/login.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { AuthInterceptorService } from './services/Auth-interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';

import { DonationComponent } from './components/donation/donation.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BillComponent } from './components/bill/bill.component';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductCategoryMenuComponent} from "./components/product-category-menu/product-category-menu.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {SearchComponent} from "./components/search/search.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import { OrderTableComponent } from './components/order-table/order-table.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import {ClientInfoComponent} from "./components/client-info/client-info.component";
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditorsComponent,
    ArticlesComponent,
    RechargeComponent,
    LoginComponent,
    AbonnementComponent,
    BillHistoryComponent,
    NavbarComponent,
    HomeComponent,
    DonationComponent,
    NavigationComponent,
    DonationComponent,
    BillComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    CheckoutComponent,
    SearchComponent,
    ProductDetailsComponent,
    OrderTableComponent,
    ClientInfoComponent,
    StripePaymentComponent,
    VerificationCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgOtpInputModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : AuthInterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
