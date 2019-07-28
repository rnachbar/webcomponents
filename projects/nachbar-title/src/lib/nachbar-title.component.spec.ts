import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachbarTitleComponent } from './nachbar-title.component';

describe('NachbarTitleComponent', () => {
  let component: NachbarTitleComponent;
  let fixture: ComponentFixture<NachbarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachbarTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachbarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
