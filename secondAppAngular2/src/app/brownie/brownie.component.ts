import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brownie',
  templateUrl: './brownie.component.html',
  styleUrls: ['./brownie.component.css']
})
export class BrownieComponent implements OnInit {

  constructor() { }
  gateau = {
    nom: "brownie",
    categorie: "dessert",
    niveau: "debutant",
    temps: 40,
    photo: "https://assets.afcdn.com/recipe/20161114/26634_w1024h768c1cx2736cy1824.webp"
  }


  ngOnInit(): void {
  }

}
