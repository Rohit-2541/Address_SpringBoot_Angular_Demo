import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/domain/address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-all-address',
  templateUrl: './all-address.component.html',
  styleUrls: ['./all-address.component.css']
})
export class AllAddressComponent implements OnInit {

  alladdresses : Address[] = [];
  result : boolean = false;

  constructor(private addressCrudService : AddressCrudService, private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.addressCrudService.getAllAddresses().subscribe(
      data => {
        this.alladdresses =data;
        console.log(this.alladdresses);
        
      }
    );
  }

  deleteAddress(addressId : number){
    console.log(addressId);
    this.addressCrudService.deleteAddress(addressId).subscribe(
      data => {
        this.result = data;
        this.reloadData();
      }
    );
  }

  addressDetails(addressId : number) {
    this.router.navigate(['addressdetails',addressId]);
  }

  updateaddress(addressId : number) {
    this.router.navigate(['updateaddress',addressId])
  }
}
