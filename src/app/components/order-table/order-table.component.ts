import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {ActivatedRoute} from "@angular/router";
import {CustomResponse} from "../../interfaces/Custom-response";

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit{


  response !: CustomResponse;
  constructor(private orderService : OrderService, private route : ActivatedRoute) {}

  ngOnInit(): void {

    this.orderService.getOrders().subscribe(response => {
      this.response = { ...response, data: { orders: response.data.orders?.reverse() } };
    })
  }


}
