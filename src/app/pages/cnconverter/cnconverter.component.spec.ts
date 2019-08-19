import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnconverterComponent } from './cnconverter.component';

describe('CnconverterComponent', () => {
  let component: CnconverterComponent;
  let fixture: ComponentFixture<CnconverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnconverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
