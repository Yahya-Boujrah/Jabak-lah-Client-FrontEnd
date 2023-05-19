import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturesComponent } from './components/factures/factures.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { HomeComponent } from './components/home/home.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { DonationComponent } from './components/donation/donation.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturesComponent,
    NavbarComponent,
    ProduitsComponent,
    HomeComponent,
    AbonnementComponent,
    RechargeComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
