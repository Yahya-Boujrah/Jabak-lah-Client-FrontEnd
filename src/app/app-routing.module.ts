import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechargeComponent } from './components/recharge/recharge.component';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { LoginComponent } from './components/login/login.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { BillRecapComponent } from './components/bill-recap/bill-recap.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'' ,canActivate:[AuthGuard], children:[
      {
        path: 'home', component:CreditorsComponent
     }, 
      {
        path: 'recharge', component: RechargeComponent
      },
      {
        path:'abonnement', component:AbonnementComponent
      },
      {
        path: 'bill-recap', component: BillRecapComponent
      },
      {
        path:'history', component: BillHistoryComponent
      }
    ]
  },
  {path: '**', redirectTo:''}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
