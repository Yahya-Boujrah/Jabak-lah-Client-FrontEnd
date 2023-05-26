import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {
  don:number = 50;

  constructor(private router: Router, private route: ActivatedRoute) {}
  cancel(){
    this.router.navigate(['navigation']);
  }

}
