import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { ArticlesComponent } from './components/creditors/articles/articles.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { LoginComponent } from './components/login/login.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { BillRecapComponent } from './components/bill-recap/bill-recap.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { AuthInterceptorService } from './services/Auth-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    CreditorsComponent,
    ArticlesComponent,
    RechargeComponent,
    LoginComponent,
    AbonnementComponent,
    BillRecapComponent,
    BillHistoryComponent
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
