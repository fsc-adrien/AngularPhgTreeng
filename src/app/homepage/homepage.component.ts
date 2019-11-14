import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy, Input, ChangeDetectorRef
} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {startWith, take, map} from 'rxjs/operators';
import {NguCarouselConfig} from '@ngu/carousel';
import {slider} from './hello-slide.animation';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.less'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  @Input() name: string;

  // @ts-ignore
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky = false;
  elementPosition: any;

  imgags = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  public carouselTileItems$: Observable<number[]>;
  // @ts-ignore
  public carouselTileConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    speed: 100,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: {timing: 2500},
    animation: 'lazy',
  };
  tempData: any[];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
