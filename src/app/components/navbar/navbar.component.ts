import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from 'src/app/services/Bill.service';
import { DebtService } from 'src/app/services/Debt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private debtService: DebtService, private router : Router, private route: ActivatedRoute,private billService: BillService) {}


  creditors(){
    this.router.navigate(['creditors'], {relativeTo: this.route});
  }
  products(){
    this.router.navigate(['delivery'], {relativeTo: this.route});
  }
  bill(){
    this.router.navigate(['bill'], {relativeTo: this.route});
  }

  orders(){
    this.router.navigate(['orders'], {relativeTo: this.route});
  }
  LogOut(){
    this.billService.deleteBill$.subscribe();
    sessionStorage.removeItem('token');
    this.router.navigate([''] );
  }
  billHistory(){
    this.router.navigate(['history'], {relativeTo: this.route});
  }
  infos(){
    this.router.navigate(['infos'], {relativeTo: this.route});
  }
}
