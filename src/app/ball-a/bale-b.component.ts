import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, from, fromEvent, of, pipe, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, catchError, retry } from 'rxjs/operators';

interface Course {
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}

@Component({
  selector: 'app-bale-b',
  // template: `<ul *ngIf="courses$ | async as courses else noData">
  //         <li *ngFor="let course of courses;">
  //             {{course.company}}
  //         </li>
  //     </ul>
  //     <ng-template #noData>No Data Available</ng-template>`
  templateUrl: 'bale-b.component.html'
})
export class BaleBComponent implements OnInit {
  courses$: Observable<Course[]>;
  private Rx: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.courses$ = ajax('https://api.github.com/users/seeschweiler').pipe(
      retry(3), // Retry up to 3 times before failing
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        let abc = res.response;
        return JSON.parse(abc);
      }),
      catchError(err => of([]))
    );

    this.courses$.subscribe({
      next(x) { console.log('log data: ', x); },
      error(err) { console.log('errors already caught... will not run'); }
    });
  }

  handleButtonClick2(url) {
    return this.Rx.Observable.fromPromise(    // Chúng ta lấy một cái Promise và vứt vào một luồng Observable
      new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function Success() {
          if (this.readyState === xhr.DONE) {
            resolve(JSON.parse(xhr.responseText));
          }
        };
        xhr.open('GET', url, true);
        xhr.send();
        // tslint:disable-next-line:only-arrow-functions
        xhr.onerror = function(error) {
          reject('Error');
        };
      })
    );
  }


}
