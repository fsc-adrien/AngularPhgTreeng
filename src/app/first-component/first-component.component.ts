import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.less']
})
export class FirstComponentComponent implements OnInit {
  todo = ["Học TypeScript", "Học Angular 4", "Học HTML5"]; // Declare new array

  constructor() { }

  ngOnInit() {
  }

}
