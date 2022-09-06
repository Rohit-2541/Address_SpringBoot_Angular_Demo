package com.mindgate.main.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mindgate.main.domain.Address;

@Repository
public class AddressDetailRepository implements AddressDetailRepositoryInterface {

	private static final String INSERT_NEW_ADDRESS ="INSERT INTO address_details VALUES(address_details_sequence.NEXTVAL,?,?,?,?)";
	private static final String SELECT_ALL_ADDRESS ="SELECT * FROM address_details";
	private static final String UPDATE_ADDRESS="update address_details set building_name=?,street=?,city=?,pin=? where address_id=?";
	private static final String DELETE_ADDRESS = "delete address_details where address_id=?";
	private static final String SELECT_SINGLE_ADDRESS = "select * from address_details where address_id=?";
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public boolean addNewAddress(Address address) {
		if (jdbcTemplate.update(INSERT_NEW_ADDRESS,address.getBuildingName(),address.getStreet(),address.getCity(),address.getPin()) > 0) {
			return true;
		}
		return false;
	}

	@Override
	public List<Address> getAllAddresses() {
		return jdbcTemplate.query(SELECT_ALL_ADDRESS, new AddressRowMapper());
	}
		

	@Override
	public boolean deleteAddressByAddressId(int addressId) {
		if (jdbcTemplate.update(DELETE_ADDRESS, addressId) > 0) {
			return true;
		}
		return false;
	}

	@Override
	public Address getAddressByAddressId(int addressId) {
		return jdbcTemplate.queryForObject(SELECT_SINGLE_ADDRESS, new AddressRowMapper(), addressId);
	}

	@Override
	public boolean updateAddress(Address address) {
		if (jdbcTemplate.update(UPDATE_ADDRESS, address.getBuildingName(), address.getStreet(), address.getCity(), address.getPin(), address.getAddressId()) > 0) {
			return true;
		}
		return false;
	}

	
	public class AddressRowMapper implements RowMapper<Address> {

		@Override
		public Address mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			int addressId = rs.getInt("address_id");
			String buildingName = rs.getString("building_name");
			String street = rs.getString("street");
			String city = rs.getString("city");
			int pin = rs.getInt("pin");
			
			Address address = new Address(addressId, buildingName, street, city, pin);
			
			return address;
		}
	}
}
