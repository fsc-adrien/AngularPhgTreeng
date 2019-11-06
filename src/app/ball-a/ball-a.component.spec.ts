import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallAComponent } from './ball-a.component';

describe('BallAComponent', () => {
  let component: BallAComponent;
  let fixture: ComponentFixture<BallAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
