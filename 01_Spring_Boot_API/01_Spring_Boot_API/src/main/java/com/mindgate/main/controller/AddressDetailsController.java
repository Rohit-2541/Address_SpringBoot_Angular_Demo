package com.mindgate.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.main.domain.Address;
import com.mindgate.main.service.AddressDetailServiceInterface;

@CrossOrigin("*")
@RestController
@RequestMapping("addressapi")
public class AddressDetailsController {
	
	@Autowired
	private AddressDetailServiceInterface addressDetailService;
	
	@RequestMapping(value = "address", method = RequestMethod.POST)
	public boolean addNewAddress(@RequestBody Address address) {
		return addressDetailService.addNewAddress(address);
	}
	
	@RequestMapping(value = "address/all", method = RequestMethod.GET)
	public List<Address> getAllAddress() {
		return addressDetailService.getAllAddresses();
	}
	
	@RequestMapping(value = "address/{addressId}", method = RequestMethod.DELETE)
	public boolean deleteAddress(@PathVariable int addressId) {
		return addressDetailService.deleteAddressByAddressId(addressId);
	}
	
	@RequestMapping(value = "address/{addressId}", method = RequestMethod.GET)
	public Address getSingleAddress(@PathVariable int addressId) {
		return addressDetailService.getAddressByAddressId(addressId);
	}
	
	@RequestMapping(value = "address", method = RequestMethod.PUT)
	public boolean updateAddress(@RequestBody Address address) {
		return addressDetailService.updateAddress(address);
	}
}
