<?php
class ModelAccountAddbaby extends model {

	public function addBaby($data) {
		//$this->db->query("INSERT INTO " . DB_PREFIX . "address SET customer_id = '" . (int)$customer_id . "', firstname = '" . $this->db->escape($data['firstname']) . "', lastname = '" . $this->db->escape($data['lastname']) . "', company = '" . $this->db->escape($data['company']) . "', company_id = '" . $this->db->escape($data['company_id']) . "', tax_id = '" . $this->db->escape($data['tax_id']) . "', address_1 = '" . $this->db->escape($data['address_1']) . "', address_2 = '" . $this->db->escape($data['address_2']) . "', city = '" . $this->db->escape($data['city']) . "', postcode = '" . $this->db->escape($data['postcode']) . "', country_id = '" . (int)$data['country_id'] . "', zone_id = '" . (int)$data['zone_id'] . "'");
		$customer_id = $this->session->data['customer_id'];
		$this->db->query("INSERT INTO " . DB_PREFIX . "baby SET customer_id = '" . (int)$customer_id . "', baby_gender = '" . $this->db->escape($data['gender']). "', baby_name = '" . $this->db->escape($data['babyname']) . "', baby_nickname = '" . $this->db->escape($data['nickname']) . "', baby_birthday = '" . $this->db->escape($data['babybirthday']) . "'");

	}

	public function getBaby($customer_id) {
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "baby WHERE customer_id = '" . (int)$customer_id . "'");
		return $query->rows;
	}

	public function editBaby($baby_id) {
		$this->db->query("DELETE FROM " . DB_PREFIX. "baby WHERE baby_id = '" . (int)$baby_id . "'");

	}
}


?>