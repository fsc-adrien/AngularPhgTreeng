import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxsampleComponent } from './rxsample.component';

describe('RxsampleComponent', () => {
  let component: RxsampleComponent;
  let fixture: ComponentFixture<RxsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
