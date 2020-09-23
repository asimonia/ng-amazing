import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})
export class DealerInventoryComponent implements OnInit {
  inventory: Vehicle[] = [];

  vehicleToEdit: Vehicle;

  constructor(private inventorySvc: InventoryService) { }

  ngOnInit(): void {
    this.inventory = this.inventorySvc.getInventory();
  }

  trackByVIN(index: number, car: Vehicle): string {
    return car.VIN;
  }

  deleteVehicle(car: Vehicle): void {
    this.inventorySvc.deleteVehicle(car);
    this.inventory = this.inventorySvc.getInventory();
  }

  handlePhotoNavigation(photoIndex: number, car: Vehicle): void {
    if (photoIndex === car.photos.length - 1) {
      alert('Come visit us in our showroom!');
    }
  }

  addVehicle(v: Vehicle): void {
    this.inventorySvc.addVehicle(v);
    this.inventory = this.inventorySvc.getInventory();
  }

  beginEditing(v: Vehicle): void {
    this.vehicleToEdit = v;
  }

  commitEdit(v: Vehicle): void {
    this.inventorySvc.updateVehicle(this.vehicleToEdit.VIN, v);
    this.inventory = this.inventorySvc.getInventory();

    this.vehicleToEdit = undefined;
  }

}
