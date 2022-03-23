import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.css']
})
export class BouttonComponent implements OnInit {

  @Input()   affichage: boolean | undefined;
  @Input()   cat: string | undefined;
  @Input()   niv: string | undefined;
  @Input()   temps: number | undefined;

  constructor() { }
  boutton = "Voir le détail";
  affich() {
    this.affichage = !this.affichage;
    if (this.affichage) {
      this.boutton = "Fermer";
    }else{
      this.boutton="Voir le détail";
    }
  }

  ngOnInit(): void {
  }

}
