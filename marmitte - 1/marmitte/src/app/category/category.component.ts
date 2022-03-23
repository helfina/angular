import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private cs : CategoriesService) { }

  addCategory(form: NgForm){

    this.cs.createCategory(form.value);
    this.ngOnInit();

  }

  affiche= 'add';
  category : any;
  update(id : number){
    this.category=this.cs.getCategory(id);
    this.affiche='edit';
  }

  delete(id: number){
    this.cs.deleteCategory(id);
    this.ngOnInit();

  }

  updateCategory(form: NgForm){
       this.cs.updateCategory(form.value, this.category['id']);
       this.affiche='add';
       this.ngOnInit();

  }


  categories : any;
  ngOnInit(): void {

   this.categories=this.cs.readCategories();

  //  console.log(this.categories);
  }

}
