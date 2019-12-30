import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseObjectComponent } from './course-object.component';

describe('CourseObjectComponent', () => {
  let component: CourseObjectComponent;
  let fixture: ComponentFixture<CourseObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
