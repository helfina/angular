import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  @Input() category : String | undefined;
  @Input() level : String | undefined;
  @Input() time : Number | undefined;
  @Input() cookTime : Number | undefined;
  


  constructor() {
   
   }
 
   affichage ="";
  
   change(value: string){
 
     this.affichage=value;
 
   }
   

  ngOnInit(): void {

  }

}
