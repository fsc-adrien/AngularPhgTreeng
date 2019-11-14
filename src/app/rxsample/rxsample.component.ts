import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-rxsample',
  // templateUrl: './rxsample.component.html',
  template: `<div><code>observable|async</code>:
       Time: {{ time | async }}</div>`,
  styleUrls: ['./rxsample.component.less']
})
export class RxsampleComponent implements OnInit {
  // @ts-ignore
  time = new Observable(observer => { setInterval(() => observer.next(new Date().toString()), 1000)});

  constructor() { }

  ngOnInit() {


    function sequenceSubscriber(observer) {
      // synchronously deliver 1, 2, and 3, then complete
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return {
        unsubscribe() {
        }
      };
    }

// Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);

// execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) {
        console.log(num);
      },
      complete() {
        console.log('Finished sequence');
      }
    });


  }
}
