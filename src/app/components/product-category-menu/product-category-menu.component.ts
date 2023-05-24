import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {CustomResponse} from "../../interfaces/Custom-response";

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit{

  response!: CustomResponse;


  constructor(private productService : ProductService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listProductCategories();
  }


  listProductCategories() {

    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.response = data;
      }
    );
  }

}
