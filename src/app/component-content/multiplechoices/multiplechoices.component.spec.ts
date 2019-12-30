import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplechoicesComponent } from './multiplechoices.component';

describe('MultiplechoicesComponent', () => {
  let component: MultiplechoicesComponent;
  let fixture: ComponentFixture<MultiplechoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplechoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplechoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
