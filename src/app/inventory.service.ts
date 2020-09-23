import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventory: Vehicle[] = [];

  constructor() { }

  public getInventory(): Vehicle[] {
    return this.inventory;
  }

  public addVehicle(v: Vehicle): void {
    this.inventory.push(v);
  }

  public updateVehicle(oldVIN: string, newVehicle: Vehicle): void {
    const oldVehicle = this.inventory.find(v => v.VIN === oldVIN);

    if (oldVehicle !== undefined) {
      Object.assign(oldVehicle, newVehicle);
    }
  }

  public deleteVehicle(vehicleToDelete: Vehicle): void {
    this.inventory = this.inventory.filter(v => v.VIN !== vehicleToDelete.VIN);
  }
}
