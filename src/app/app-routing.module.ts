import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RechargeComponent } from './components/recharge/recharge.component';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { LoginComponent } from './components/login/login.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { AuthGuard } from './auth-guard.guard';


import { HomeComponent } from './components/home/home.component';
import { DonationComponent } from './components/donation/donation.component';
import { BillComponent } from './components/bill/bill.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';


const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'' ,canActivate:[AuthGuard], children:[
      {
        path: "navigation" , component: NavigationComponent, children:[
          {
            path: '', component:HomeComponent
          }, 
          {
            path: 'creditors/recharge', component: RechargeComponent
          },
           {
            path: "creditors/abonnement" , component: AbonnementComponent
          },
          
          {
            path: "creditors/donation" , component: DonationComponent
          },
          {
            path:'bill', component: BillComponent
          },
          {
            path:'history', component: BillHistoryComponent
          },
          {
            path: "creditors" , component: CreditorsComponent, children:[
           
            ]
          },
          {
            path: 'infos', component:ClientInfoComponent
          },
          {
            path: "products" , component: ProductsComponent
          },
          
        ]
      },
   
    ]
  },
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
