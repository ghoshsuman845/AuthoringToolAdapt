import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingQaComponent } from './matching-qa.component';

describe('MatchingQaComponent', () => {
  let component: MatchingQaComponent;
  let fixture: ComponentFixture<MatchingQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
