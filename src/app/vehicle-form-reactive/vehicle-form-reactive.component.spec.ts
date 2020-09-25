import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormReactiveComponent } from './vehicle-form-reactive.component';

describe('VehicleFormReactiveComponent', () => {
  let component: VehicleFormReactiveComponent;
  let fixture: ComponentFixture<VehicleFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should validate input', () => {
    const input = {
      veh_vin: 'V1000',
      veh_year: 2019,
      veh_make: 'BMW',
      veh_model: '330i',
      veh_mileage: 25000,
      veh_price: 22000,
      veh_featured: true
    };

    // simulate user input
    component.vehicleForm.setValue(input);

    expect(component.vehicleForm.valid).toBeTrue();

    input.veh_vin = 'V1QQQQ'; // invalid
    component.vehicleForm.setValue(input);
    expect(component.vehicleForm.valid).toBeFalse();
  });
});
