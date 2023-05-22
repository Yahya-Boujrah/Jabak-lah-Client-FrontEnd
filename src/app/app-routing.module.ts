import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { DonationComponent } from './components/donation/donation.component';
import { BillComponent } from './components/bill/bill.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "creditors" , component: CreditorsComponent
  },
  {
    path: "products" , component: ProductsComponent
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
  },
  {
    path: "bill" , component: BillComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
