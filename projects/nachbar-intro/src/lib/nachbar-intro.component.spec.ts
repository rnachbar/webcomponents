import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachbarIntroComponent } from './nachbar-intro.component';

describe('NachbarIntroComponent', () => {
  let component: NachbarIntroComponent;
  let fixture: ComponentFixture<NachbarIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachbarIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachbarIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
