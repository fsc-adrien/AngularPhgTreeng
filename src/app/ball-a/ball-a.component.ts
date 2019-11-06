import { Component } from '@angular/core';
import {CService} from "./bale-c.service";

@Component({
  selector: 'app-ball-a',
  providers: [CService],
  template: `<button (click)="showA = !showA">Toggle</button>
  <p>{{showA ? 'component A is display' : 'component A is hidden'}}</p>
  <app-bale-b></app-bale-b>
  <app-bale-a *ngIf="showA"></app-bale-a>`,
})
export class BallAComponent {
  showA = true;
}
