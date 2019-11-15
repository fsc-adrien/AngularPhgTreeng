import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaserdComponent } from './firebaserd.component';

describe('FirebaserdComponent', () => {
  let component: FirebaserdComponent;
  let fixture: ComponentFixture<FirebaserdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaserdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaserdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
