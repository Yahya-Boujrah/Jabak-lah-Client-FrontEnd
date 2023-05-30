import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {CustomResponse} from "../../interfaces/Custom-response";

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  faArrowLeft = faArrowLeft;

  productId !: number;

  response !: CustomResponse;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.getProductDetails();
    })
  }


  getProductDetails(){
    this.productId = this.route.snapshot.paramMap.get('id') as unknown as number;

    console.log(this.productId);


    this.productService.getProduct(this.productId).subscribe(response =>{
      this.response = response;
    })
  }

  addToBill(product : any){
    this.productService.addToBill(product).subscribe();
  }



}
