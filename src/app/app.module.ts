import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TapCounterComponent } from './tap-counter/tap-counter.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    TapCounterComponent,
    DealerInventoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
