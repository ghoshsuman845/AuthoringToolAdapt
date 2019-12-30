import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplechoiceComponent } from './multiplechoice.component';

describe('MultiplechoiceComponent', () => {
  let component: MultiplechoiceComponent;
  let fixture: ComponentFixture<MultiplechoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplechoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplechoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
