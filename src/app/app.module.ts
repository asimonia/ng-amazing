import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TapCounterComponent } from './tap-counter/tap-counter.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleFormReactiveComponent } from './vehicle-form-reactive/vehicle-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TapCounterComponent,
    DealerInventoryComponent,
    PhotoGalleryComponent,
    VehicleFormComponent,
    VehicleFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
