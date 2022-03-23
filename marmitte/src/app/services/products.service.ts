import { Injectable } from '@angular/core';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products= Array();
  produits : any;
  createProduct(product : JSON){
  
     if(  ! sessionStorage.getItem('products'))
      {
     
         let newProduct= { id:1, ... product    };
         this.products=[];
         this.products.push(newProduct);
         sessionStorage.setItem('products', JSON.stringify(this.products));

      }else{
          
      this.produits=sessionStorage.getItem('products');
      this.products=JSON.parse(this.produits);

       let id = this.products.slice(-1)[0]['id'] + 1;
       let newProduct= { id:id, ... product    };
      this.products.push(newProduct);
      sessionStorage.setItem('products', JSON.stringify(this.products));

     }
    
  }

  readProducts(){

    this.produits=sessionStorage.getItem('products');
     return this.products=JSON.parse(this.produits);

  }

  updateProduct(product: JSON, id: number){
    this.produits=sessionStorage.getItem('products');
    this.products= JSON.parse(this.produits);

    for(let i=0; i<this.products.length; i++){
      if(this.products[i]['id']== id){
        this.products[i]=product;
        sessionStorage.setItem('products', JSON.stringify(this.products));

      }
    }
  }

  deleteProduct(id : number){
    this.produits=sessionStorage.getItem('products');
    this.products= JSON.parse(this.produits);


    for(let i=0; i<this.products.length; i++){
      if(this.products[i]['id']== id){
        if(this.products.length>1){
           this.products.splice(i,1);
           sessionStorage.setItem('products', JSON.stringify(this.products));
          }else{
          sessionStorage.removeItem('products');

          }
      }


    }

  }



 produit: any;
  getProduct(id : number){
    this.produits=sessionStorage.getItem('products');
    this.products= JSON.parse(this.produits);


    for(let i=0; i<this.products.length; i++){
      if(this.products[i]['id']== id){
          return this.produit=this.products[i];

      }


    }

  }


  constructor() { }
}
