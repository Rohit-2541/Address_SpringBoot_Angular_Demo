import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../domain/address';

@Injectable({
  providedIn: 'root'
})
export class AddressCrudService {

  private baseURl : string = "http://localhost:8080/addressapi/address";

  constructor(private httpClient : HttpClient) { }

  public getAllAddresses() : Observable<Address[]> {
    console.log("in getAllAddress");
    
    return this.httpClient.get<Address[]>(this.baseURl+"/all");
  }

  public addNewAddress(address : Address) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseURl, address);
  }

  public deleteAddress(addressId : number) : Observable<boolean> {
    return this.httpClient.delete<boolean>(this.baseURl+"/"+addressId);
  }


  public getSingleAddress(addressId : number) : Observable<Address> {
    return this.httpClient.get<Address>(this.baseURl+"/"+addressId);
  }

  public updateAddress(address : Address) : Observable<boolean> {
    return this.httpClient.put<boolean>(this.baseURl, address);
  }
}
