import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListComponentComponent } from './department-list-component.component';

describe('DepartmentListComponentComponent', () => {
  let component: DepartmentListComponentComponent;
  let fixture: ComponentFixture<DepartmentListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
