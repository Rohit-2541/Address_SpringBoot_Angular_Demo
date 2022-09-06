import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/domain/address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.css']
})
export class AddNewAddressComponent implements OnInit {

  address : Address = new Address();
  result : boolean = false;
  submitted : boolean = false;


  constructor(private addressCrudService : AddressCrudService , private router : Router) { }

  ngOnInit(): void {
  }

  addNewAddress (){
    console.log("addNewAddress");
    console.log(this.address);
    this.addressCrudService.addNewAddress(this.address).subscribe(
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
