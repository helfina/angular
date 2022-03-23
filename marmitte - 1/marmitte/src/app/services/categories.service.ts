import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories= Array();
  cats : any;

  createCategory(category : Object){

     if(  ! sessionStorage.getItem('categories'))
      {
      
        let newCategory= { id:1, ... category    };
         //console.log(newCategory);
         this.categories=[];
         this.categories.push(newCategory);
         sessionStorage.setItem('categories', JSON.stringify(this.categories));

      }else{

      this.cats=sessionStorage.getItem('categories');
      this.categories=JSON.parse(this.cats);
       let id = this.categories.slice(-1)[0]['id'] + 1;
       let newCategory= { id:id, ... category    };
      this.categories.push(newCategory);
      sessionStorage.setItem('categories', JSON.stringify(this.categories));

     }
    
  }

  readCategories(){

    this.cats=sessionStorage.getItem('categories');
     return this.categories=JSON.parse(this.cats);

  }

  updateCategory(category: JSON, id: number){
    this.cats=sessionStorage.getItem('categories');
    this.categories= JSON.parse(this.cats);

    for(let i=0; i<this.categories.length; i++){
      if(this.categories[i]['id']== id){
        this.categories[i]=category;
        sessionStorage.setItem('categories', JSON.stringify(this.categories));

      }
    }
  }

  deleteCategory(id : number){
    this.cats=sessionStorage.getItem('categories');
    this.categories= JSON.parse(this.cats);


    for(let i=0; i<this.categories.length; i++){
      if(this.categories[i]['id']== id){
        if(this.categories.length>1){
           this.categories.splice(i,1);
           sessionStorage.setItem('categories', JSON.stringify(this.categories));
          }else{
          sessionStorage.removeItem('categories');

          }
      }


    }

  }



 category: any;
  getCategory(id : number){
    this.cats=sessionStorage.getItem('categories');
    this.categories= JSON.parse(this.cats);


    for(let i=0; i<this.categories.length; i++){
      if(this.categories[i]['id']== id){
          return this.category=this.categories[i];

      }


    }

  }




  constructor() { }
}
