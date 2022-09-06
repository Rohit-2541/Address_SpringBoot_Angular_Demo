import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressMenuComponent } from './address/address-menu/address-menu.component';
import { AddNewAddressComponent } from './address/add-new-address/add-new-address.component';
import { AllAddressComponent } from './address/all-address/all-address.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddressDetailsComponent } from './address/address-details/address-details.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressMenuComponent,
    AddNewAddressComponent,
    AllAddressComponent,
    AddressDetailsComponent,
    UpdateAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
