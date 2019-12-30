import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextboxComponent } from './input-textbox.component';

describe('InputTextboxComponent', () => {
  let component: InputTextboxComponent;
  let fixture: ComponentFixture<InputTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
