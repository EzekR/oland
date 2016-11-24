<?php 
class ModelPaymentWeipay extends Model {

  	public function getMethod($address) {
		$this->load->language('payment/weipay');

		if ($this->config->get('weipay_status')) {
			$status = TRUE;
		} else {
			$status = FALSE;
		}
		
		
		$user_agent = $_SERVER['HTTP_USER_AGENT'];
		if (strpos($user_agent, 'MicroMessenger') === false) {
			// 非微信浏览器禁止浏览
			//echo "HTTP/1.1 401 Unauthorized";
		} else {
			$status = TRUE;	
		}

		$method_data = array();

		if ($status) {  
			$method_data = array( 
				'code'         => 'weipay',
				'title'      => $this->language->get('text_title'),
				'terms'      => '',
				'sort_order' => $this->config->get('weipay_sort_order')
			);
		}
		return $method_data;
	}
}

?>