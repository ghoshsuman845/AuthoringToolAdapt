import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCourseComponent } from './final-course.component';

describe('FinalCourseComponent', () => {
  let component: FinalCourseComponent;
  let fixture: ComponentFixture<FinalCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
