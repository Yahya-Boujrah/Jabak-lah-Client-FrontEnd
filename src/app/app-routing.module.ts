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
import { ClientInfoComponent } from './components/client-info/client-info.component';
import {ProductCategoryMenuComponent} from "./components/product-category-menu/product-category-menu.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {OrderTableComponent} from "./components/order-table/order-table.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {PasswordChangeGuard} from "./password-change.guard";


const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'' ,canActivate:[AuthGuard], children:[
      {
        path:'change-pwd', component: ChangePasswordComponent,canActivate:[PasswordChangeGuard]
      },
          {
        path: "navigation" , component: NavigationComponent, children:[
          {
            path: "" , component: CreditorsComponent
          },
          {
            path: 'recharge', component: RechargeComponent
          },
           {
            path: "abonnement" , component: AbonnementComponent
          },

          {
            path: "donation" , component: DonationComponent
          },
          {
            path:'bill', component: BillComponent
          },
          {
            path:'history', component: BillHistoryComponent
          },

          {
            path: 'infos', component:ClientInfoComponent
          },
          {
            path: 'orders', component:OrderTableComponent
          },
          {
            path:'delivery', component:ProductCategoryMenuComponent, children : [
              {path: 'category/:id', component: ProductListComponent},
              {path: 'search/:keyword', component: ProductListComponent},
              {path: '', component: ProductListComponent},
              {path : 'products/:id', component : ProductDetailsComponent}
            ]
          },

        ]
      },

    ]
  },
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
