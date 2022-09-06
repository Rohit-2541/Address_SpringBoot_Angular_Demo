import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewAddressComponent } from './address/add-new-address/add-new-address.component';
import { AddressDetailsComponent } from './address/address-details/address-details.component';
import { AllAddressComponent } from './address/all-address/all-address.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';

const routes: Routes = [
  {path:"addnewaddress", component: AddNewAddressComponent},
  {path:"", component: AllAddressComponent},
  {path:"addressdetails/:addressId", component: AddressDetailsComponent},
  {path:"updateaddress/:addressId", component: UpdateAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
