import { Component } from '@angular/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent {
  operator: string = "Maroc Telecom";
  amount: number = 10;
}
