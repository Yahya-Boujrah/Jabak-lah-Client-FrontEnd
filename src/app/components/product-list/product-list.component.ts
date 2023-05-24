import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/product";
import {CustomResponse} from "../../interfaces/Custom-response";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  response!: CustomResponse;
  currentCategoryId: number = 1;

  constructor(private productService : ProductService, private route : ActivatedRoute) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    const hasKeyword: boolean = this.route.snapshot.paramMap.has("keyword");

    if (hasKeyword){

      this.handleSearchProducts();

    } else{
      this.handleListProducts();
    }

  }

  handleListProducts(){
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      response => {
        this.response = response;
      }
    )
  }

  handleSearchProducts(){

    const keyword : string = this.route.snapshot.paramMap.get('keyword')!;
    this.productService.searchProducts(keyword).subscribe(
      response =>{
        this.response = response;
      }
    )

  }

  addToBill(product : Product){
    this.productService.addToBill(product).subscribe();
  }

}
