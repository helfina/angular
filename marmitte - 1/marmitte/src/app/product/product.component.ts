import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ps : ProductsService) { }

  wishList = Array()

  empty = 0;
  addWish(produit: Object) {

    if (!this.wishList.includes(produit)) {
      this.empty += 1;
      this.wishList.push(produit);
    }

  }


  removeWish(id: Number) {
    for (let i = 0; i < this.wishList.length; i++) {

      if (this.wishList[i].id == id) {
        this.wishList.splice(i, 1);
        this.empty -= 1;
      }
    }
  }

produits: any;

  ngOnInit(): void {
    //sessionStorage.removeItem('products');
       this.produits=this.ps.readProducts();
  }

}
