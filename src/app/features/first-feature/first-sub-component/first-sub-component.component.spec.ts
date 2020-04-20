import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubComponentComponent } from './first-sub-component.component';

describe('ProtectedComponentComponent', () => {
  let component: FirstSubComponentComponent;
  let fixture: ComponentFixture<FirstSubComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSubComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
