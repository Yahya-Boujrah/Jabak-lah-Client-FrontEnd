import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { ArticlesComponent } from './components/creditors/articles/articles.component';
import { LoginComponent } from './components/login/login.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { AuthInterceptorService } from './services/Auth-interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { DonationComponent } from './components/donation/donation.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { BillComponent } from './components/bill/bill.component';

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
    ProductsComponent,
    HomeComponent,
    DonationComponent,
    NavigationComponent,
    RechargeComponent,
    DonationComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : AuthInterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
