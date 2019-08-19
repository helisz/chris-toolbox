import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireEmblemComponent } from './fire-emblem.component';

describe('FireEmblemComponent', () => {
  let component: FireEmblemComponent;
  let fixture: ComponentFixture<FireEmblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireEmblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireEmblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
