import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/domain/address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  addressId : number = 0;
  address : Address = new Address();

  constructor(private activatedRoute : ActivatedRoute, private addressCrudService : AddressCrudService, private router : Router) { }

  ngOnInit(): void {
    this.addressId = this.activatedRoute.snapshot.params['addressId'];
    this.addressCrudService.getSingleAddress(this.addressId).subscribe(
      data => {
        this.address = data;
      }
    );
  }

  backToHome() {
    console.log("backToHome()")
    this.router.navigate(['']);
  }

}
