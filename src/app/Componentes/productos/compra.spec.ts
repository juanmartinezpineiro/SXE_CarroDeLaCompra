import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { carroCompra } from './compra';

describe('Compra', () => {
  let component: carroCompra;
  let fixture: ComponentFixture<carroCompra>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ carroCompra ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(carroCompra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
