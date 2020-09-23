import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})
export class DealerInventoryComponent implements OnInit {

  vehicleToEdit: Vehicle = undefined;

  inventory: Vehicle[] = [];

  trackByVIN(index: number, car: Vehicle): string {
    return car.VIN;
  }

  deleteVehicle(car: Vehicle): void {
    this.inventorySvc.deleteVehicle(car).subscribe(() => {
      // Update local copy of the list
      this.inventory = this.inventory.filter(v => v.VIN !== car.VIN);
    });
  }

  constructor(private inventorySvc: InventoryService) { }

  ngOnInit(): void {
    this.inventorySvc.getInventory()
      .subscribe(list => this.inventory = list);
  }

  handlePhotoNavigation(photoIndex: number, car: Vehicle): void {
    if (photoIndex === car.photos.length - 1) {
      alert('Come visit us in our showroom!');
    }
  }

  addVehicle(v: Vehicle): void {
    this.inventorySvc.addVehicle(v).subscribe(() => {
      this.inventory.push(v);
    });
  }

  beginEditing(v: Vehicle): void {
    this.vehicleToEdit = v;
  }

  commitEdit(v: Vehicle): void {
    this.inventorySvc.updateVehicle(this.vehicleToEdit.VIN, v)
      .subscribe(() => {
        Object.assign(this.vehicleToEdit, v);
        this.vehicleToEdit = undefined;
      });
  }

}
