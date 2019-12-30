import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSidebarComponent } from './component-sidebar.component';

describe('ComponentSidebarComponent', () => {
  let component: ComponentSidebarComponent;
  let fixture: ComponentFixture<ComponentSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
