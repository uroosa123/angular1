import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UroosaComponent } from './uroosa.component';

describe('UroosaComponent', () => {
  let component: UroosaComponent;
  let fixture: ComponentFixture<UroosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UroosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UroosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
