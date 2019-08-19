import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnetProdGenComponent } from './comnet-prod-gen.component';

describe('ComnetProdGenComponent', () => {
  let component: ComnetProdGenComponent;
  let fixture: ComponentFixture<ComnetProdGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComnetProdGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComnetProdGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
