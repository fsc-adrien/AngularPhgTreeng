import {Component, OnInit, OnDestroy} from '@angular/core';
import {SubscriptionLike} from 'rxjs';

import {CService} from './bale-c.service';

@Component({
  selector: 'app-bale-a',
  template: `<h1>GET and show data!</h1>`,
})
export class BaleAComponent implements OnInit, OnDestroy {
  subscription: SubscriptionLike;

  constructor(private cService: CService) {
  }

  ngOnInit() {
    const subscription = this.cService.buttonObservable.subscribe(e => {
      console.log('GET api');
    });
  }

  ngOnDestroy() {
    // unsubscribe
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
