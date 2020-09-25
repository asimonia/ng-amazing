import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { DealerInventoryComponent } from './dealer-inventory.component';

import { HttpClientModule } from '@angular/common/http';
import { Vehicle } from '../vehicle';
import '@angular/common/locales/global/fr';

describe('DealerInventoryComponent', () => {
  let component: DealerInventoryComponent;
  let fixture: ComponentFixture<DealerInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ DealerInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should add vehicle', async(() => {
    const v = new Vehicle('V3000', 2018, 'BMW', '750i', 25000, 54000, false, []);

    // Wait for ngOnInit to complete
    fixture.whenStable().then(() => {
      component.addVehicle(v);

      // Wait for addVehicle to complete
      fixture.whenStable().then(() => {
        // Now do validation
        const car = component.inventory.find(item => item.VIN === v.VIN);

        expect(car).toBeDefined();
        expect(car.make).toBe('BMW');
      });
    });

  }));
});
