import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes =[
{ path: "" , component: ProductComponent    },
{  path: "addProduct", component: AddProductComponent },
{  path: "category", component: CategoryComponent },
{  path: "products", component: ListProductComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
