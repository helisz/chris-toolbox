import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1MainComponent } from './demo1-main.component';

describe('Demo1MainComponent', () => {
  let component: Demo1MainComponent;
  let fixture: ComponentFixture<Demo1MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
