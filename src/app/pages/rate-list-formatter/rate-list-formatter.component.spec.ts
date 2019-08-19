import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateListFormatterComponent } from './rate-list-formatter.component';

describe('RateListFormatterComponent', () => {
  let component: RateListFormatterComponent;
  let fixture: ComponentFixture<RateListFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateListFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateListFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
