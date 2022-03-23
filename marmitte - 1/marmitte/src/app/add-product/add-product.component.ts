import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProductsService, private router: Router, private cs: CategoriesService) { }

  addProduct(form: NgForm){
    // console.log(form.value);
    this.ps.createProduct(form.value);
    console.log(sessionStorage.getItem("products"));
    this.router.navigate(['products']);
  //sessionStorage.removeItem('products');
  }
   categories: any;
  ngOnInit(): void {
      this.categories=this.cs.readCategories();
  }

}
