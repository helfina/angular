import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.css']
})
export class BonjourComponent implements OnInit {

  constructor() { }
// on déclare une variable titre que l'on va pouvoir appeller dans notre comonent.html, cette variable n'a d'existence qu'au sein de notre bonjour component 
  titre='C\'est mon bonjour component'; 

  desFruits=['pomme', 'poire', 'banane', 'kiwi'];




  ngOnInit(): void {
  }








}
