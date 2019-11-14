import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demo-Project';
  // @ts-ignore
  @ViewChild('stickyMenu') menuElement: ElementRef;
  @Input() name: string;
  sticky = false;
  elementPosition: any;

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
