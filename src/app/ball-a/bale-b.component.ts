import {Component} from '@angular/core';
import {interval, from, fromEvent, of, pipe, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, catchError, retry } from 'rxjs/operators';

import {CService} from './bale-c.service';

@Component({
  selector: 'app-bale-b',
  templateUrl: './bale-b.component.html',
})
export class BaleBComponent {
  constructor(private cService: CService) {
  }

  handleButtonClick(e) {
    this.cService.buttonSubject.next(e);
  }

// ============= Tip 1 interval =============
//   handleButtonClick2(e) {
// // Create an Observable that will publish a value on an interval
//     const secondsCounter = interval(1000000);
// // Subscribe to begin publishing values
//     secondsCounter.subscribe(n =>
//       console.log(`It's been ${n} seconds since subscribing!`));
//     debugger;
//   }
// ============= Tip 1 interval =============

// ============= Tip 2 from  =============
//   handleButtonClick2(e) {
// // Create an Observable out of a promise
//     const data = from(fetch('/api/endpoint'));
// // Subscribe to begin listening for async result
//     data.subscribe({
//       next(response) { console.log(response); },
//       error(err) { console.error('Error: ' + err); },
//       complete() { console.log('Completed'); }
//     });
//   }
// ============= Tip 2 from  =============


  handleButtonClick2(e) {
    const el = document.getElementById('my-element');
// ============= Tip 3 fromEvent =============
//
// // Create an Observable that will publish mouse movements
//     const mouseMoves = fromEvent(el, 'mousemove');
//
// // Subscribe to start listening for mouse-move events
//     const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
//       // Log coords of mouse movements
//       console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
//
//       // When the mouse is over the upper-left of the screen,
//       // unsubscribe to stop listening for mouse movements
//       if (evt.clientX < 40 && evt.clientY < 40) {
//         subscription.unsubscribe();
//       }
//     });
//   }
// ============= Tip 3 fromEvent =============

// ============= Tip 4 AJAX =============

// Create an Observable that will create an AJAX request
//     const apiData = ajax('/api/data');
// // Subscribe to create the request
//     apiData.subscribe(res => console.log(res.status, res.response));
// ============= Tip 4 AJAX =============
    const apiData = ajax('/api/data').pipe(
      retry(3), // Retry up to 3 times before failing
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );

    apiData.subscribe({
      next(x) { console.log('data: ', x); },
      error(err) { console.log('errors already caught... will not run'); }
    });
  }
}
