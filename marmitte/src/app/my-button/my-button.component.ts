import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
@Input()category: string |undefined;
@Input()level: string |undefined;
@Input()time: number |undefined;
@Input()cookTime: number |undefined;

  constructor() { }
  affichage ="";
  onChange(value:string) {
    this.affichage=value;
  }
  ngOnInit(): void {
  }

}
