import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ratify2Component } from './ratify2.component';

describe('Ratify2Component', () => {
  let component: Ratify2Component;
  let fixture: ComponentFixture<Ratify2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ratify2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ratify2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
