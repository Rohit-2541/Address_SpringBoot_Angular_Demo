package com.mindgate.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.main.domain.Address;
import com.mindgate.main.repository.AddressDetailRepositoryInterface;

@Service
public class AddressDetailService implements AddressDetailServiceInterface {
	
	@Autowired
	private AddressDetailRepositoryInterface addressDetailRepository;

	@Override
	public boolean addNewAddress(Address address) {
		return addressDetailRepository.addNewAddress(address);
	}

	@Override
	public List<Address> getAllAddresses() {
		return addressDetailRepository.getAllAddresses();
	}

	@Override
	public boolean deleteAddressByAddressId(int addressId) {
		return addressDetailRepository.deleteAddressByAddressId(addressId);
	}

	@Override
	public Address getAddressByAddressId(int addressId) {
		return addressDetailRepository.getAddressByAddressId(addressId);
	}

	@Override
	public boolean updateAddress(Address address) {
		return addressDetailRepository.updateAddress(address);
	}

}
