import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private ps : ProductsService, private router: Router, private cs:CategoriesService) { }

  produit: any;
  affiche=false;
  update(value : number){
    this.produit=this.ps.getProduct(value);
   this.affiche=true;
  }

  updateProduct(form: NgForm){
     //console.log(this.produit);
    //console.log(form.value['title']);
     
    this.ps.updateProduct(form.value, this.produit['id']);
    this.affiche=false;
    this.ngOnInit();
  }

  delete(value: number){
       this.ps.deleteProduct(value);
       this.ngOnInit();

  }

  produits : any;
  categories: any;
  ngOnInit(): void {
      this.produits=this.ps.readProducts();
      this.categories=this.cs.readCategories();

  }

}
