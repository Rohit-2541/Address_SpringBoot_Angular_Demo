import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/domain/address';
import { AddressCrudService } from 'src/app/services/address-crud.service';


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  submitted : boolean = false;
  addressId : number =0;
  address : Address = new Address();
  result : boolean = false;

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private addressCrudService : AddressCrudService) { }

  ngOnInit(): void {
    this.addressId = this.activatedRoute.snapshot.params['addressId'];
    this.addressCrudService.getSingleAddress(this.addressId).subscribe(
      data => {
        this.address = data;
      }
    );
  }

  updateAddress(){
    this.addressCrudService.updateAddress(this.address).subscribe(
      data => {
        this.result = data;
        this.submitted = true;
      }
    );
  }

  backToHome() {
    console.log("backToHome()")
    this.router.navigate(['']);
  }

}
