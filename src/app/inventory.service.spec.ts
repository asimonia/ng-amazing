import { HttpClientModule } from '@angular/common/http';
import { Vehicle } from './vehicle';

import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;
  const sampleVehicle = new Vehicle(
    'V1000', 2019, 'BMW', '330i', 25000, 34000, false, []);

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(InventoryService);

    service.addVehicle(sampleVehicle).subscribe(() => {
      done();
    });
  });

  afterEach((done) => {
    service.deleteVehicle(sampleVehicle).subscribe(() => {
      done();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should fetch vehicles', (done) => {
    service.getInventory().subscribe(list => {
      const v = list.find(item => sampleVehicle.VIN === item.VIN);
      expect(v).toBeDefined();

      done();
    });
  });

  it('Should update vehicle', (done) => {
    const updated = new Vehicle('V1000', 2018, 'BMW', '750i', 25000, 54000, false, []);

    service.updateVehicle(sampleVehicle.VIN, updated).subscribe(() => {
      service.getInventory().subscribe(list => {
        const v = list.find(item => sampleVehicle.VIN === item.VIN);

        expect(v).toBeDefined();
        expect(v.model).toBe('750i');
        expect(v.price).toBe(54000);

        done();
      });
    });
  });
});
