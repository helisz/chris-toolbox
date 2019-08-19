import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1AddComponent } from './demo1-add.component';

describe('Demo1AddComponent', () => {
  let component: Demo1AddComponent;
  let fixture: ComponentFixture<Demo1AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
