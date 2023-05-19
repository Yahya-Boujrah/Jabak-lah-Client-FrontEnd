import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturesComponent } from './components/factures/factures.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { HomeComponent } from './components/home/home.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { DonationComponent } from './components/donation/donation.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "factures" , component: FacturesComponent
  },
  {
    path: "produits" , component: ProduitsComponent
  },
  {
    path: "home" , component: HomeComponent
  },
  {
    path: "abonnement" , component: AbonnementComponent
  },
  {
    path: "recharge" , component: RechargeComponent
  },
  {
    path: "donation" , component: DonationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
