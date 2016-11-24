<?php 
class ControllerPaymentWeipay extends Controller {
	private $error = array(); 

	public function index() {
		$this->load->language('payment/weipay');

		$this->document->settitle($this->language->get('heading_title'));
		
		if (isset($this->error['weipay_appid'])) {
			$this->data['error_appid'] = $this->error['weipay_appid'];
		} else {
			$this->data['error_appid'] = '';
		}

		if (isset($this->error['weipay_mchid'])) {
			$this->data['error_mchid'] = $this->error['weipay_mchid'];
		} else {
			$this->data['error_mchid'] = '';
		}

		if (isset($this->error['weipay_appsecret'])) {
			$this->data['error_appsecret'] = $this->error['weipay_appsecret'];
		} else {
			$this->data['error_appsecret'] = '';
		}

		if (isset($this->error['weipay_key'])) {
			$this->data['error_key'] = $this->error['weipay_key'];
		} else {
			$this->data['error_key'] = '';
		}
		
   		$this->data['breadcrumbs']  = array();

   		$this->data['breadcrumbs'][] = array(
       		'href'      => HTTPS_SERVER . 'index.php?route=common/home&token=' . $this->session->data['token'],
       		'text'      => $this->language->get('text_home'),
      		'separator' => FALSE
   		);

   		$this->data['breadcrumbs'][] = array(
       		'href'      => HTTPS_SERVER . 'index.php?route=extension/payment&token=' . $this->session->data['token'],
       		'text'      => $this->language->get('text_payment'),
      		'separator' =>' > '
   		);

   		$this->data['breadcrumbs'][] = array(
       		'href'      => HTTPS_SERVER . 'index.php?route=payment/weipay&token=' . $this->session->data['token'],
       		'text'      => $this->language->get('heading_title'),
      		'separator' =>' > '
   		);
   		
		$this->load->model('setting/setting');
			
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && ($this->validate())) {
			$this->load->model('setting/setting');
			
			$this->model_setting_setting->editSetting('weipay', $this->request->post);				
			
			$this->session->data['success'] = $this->language->get('text_success');

			$this->redirect( HTTPS_SERVER . 'index.php?route=extension/payment&token=' . $this->session->data['token']);
		}

		$this->data['heading_title'] = $this->language->get('heading_title');

		$this->data['text_edit'] = $this->language->get('text_edit');
		$this->data['text_enabled'] = $this->language->get('text_enabled');
		$this->data['text_disabled'] = $this->language->get('text_disabled');
		$this->data['text_all_zones'] = $this->language->get('text_all_zones');
		$this->data['text_yes'] = $this->language->get('text_yes');
		$this->data['text_no'] = $this->language->get('text_no');
		
		$this->data['entry_order_finish_status'] = $this->language->get('entry_order_finish_status');	
		$this->data['entry_order_status'] = $this->language->get('entry_order_status');	
		$this->data['entry_status'] = $this->language->get('entry_status');
		$this->data['entry_sort_order'] = $this->language->get('entry_sort_order');
		$this->data['entry_key'] = $this->language->get('entry_key');
		$this->data['entry_appid'] = $this->language->get('entry_appid');
		$this->data['entry_mchid'] = $this->language->get('entry_mchid');
		$this->data['entry_appsecret'] = $this->language->get('entry_appsecret');
		$this->data['button_save'] = $this->language->get('button_save');
		$this->data['button_cancel'] = $this->language->get('button_cancel');

		$this->data['tab_general'] = $this->language->get('tab_general');

 		if (isset($this->error['warning'])) {
			$this->data['error_warning'] = $this->error['warning'];
		} else {
			$this->data['error_warning'] = '';
		}
		
 		if (isset($this->error['email'])) {
			$this->data['error_email'] = $this->error['email'];
		} else {
			$this->data['error_email'] = '';
		}


		$this->data['action'] = HTTPS_SERVER . 'index.php?route=payment/weipay&token=' . $this->session->data['token'];
		
		$this->data['cancel'] =  HTTPS_SERVER . 'index.php?route=extension/payment&token=' . $this->session->data['token'];
		
		
		if (isset($this->request->post['weipay_appid'])) {
			$this->data['weipay_appid'] = $this->request->post['weipay_appid'];
		} else {
			$this->data['weipay_appid'] = $this->config->get('weipay_appid');
		}

		if (isset($this->request->post['weipay_mchid'])) {
			$this->data['weipay_mchid'] = $this->request->post['weipay_mchid'];
		} else {
			$this->data['weipay_mchid'] = $this->config->get('weipay_mchid');
		}

		if (isset($this->request->post['weipay_appsecret'])) {
			$this->data['weipay_appsecret'] = $this->request->post['weipay_appsecret'];
		} else {
			$this->data['weipay_appsecret'] = $this->config->get('weipay_appsecret');
		}

		if (isset($this->request->post['weipay_key'])) {
			$this->data['weipay_key'] = $this->request->post['weipay_key'];
		} else {
			$this->data['weipay_key'] = $this->config->get('weipay_key');
		}
		
		if (isset($this->request->post['weipay_order_status_id'])) {
			$this->data['weipay_order_status_id'] = $this->request->post['weipay_order_status_id'];
		} else {
			$this->data['weipay_order_status_id'] = $this->config->get('weipay_order_status_id'); 
		} 

		if (isset($this->request->post['weipay_order_finish_status_id'])) {
			$this->data['weipay_order_finish_status_id'] = $this->request->post['weipay_order_finish_status_id'];
		} else {
			$this->data['weipay_order_finish_status_id'] = $this->config->get('weipay_order_finish_status_id'); 
		} 

		$this->load->model('localisation/order_status');
		
		$this->data['order_statuses'] = $this->model_localisation_order_status->getOrderStatuses();
			
		$this->load->model('localisation/geo_zone');
										
		$this->data['geo_zones'] = $this->model_localisation_geo_zone->getGeoZones();
		
		if (isset($this->request->post['weipay_status'])) {
			$this->data['weipay_status'] = $this->request->post['weipay_status'];
		} else {
			$this->data['weipay_status'] = $this->config->get('weipay_status');
		}
		
		if (isset($this->request->post['weipay_sort_order'])) {
			$this->data['weipay_sort_order'] = $this->request->post['weipay_sort_order'];
		} else {
			$this->data['weipay_sort_order'] = $this->config->get('weipay_sort_order');
		}
		
		$this->template = 'payment/weipay.tpl';
		$this->children = array(
			'common/header',	
			'common/footer'	
		);
		
		$this->response->setOutput($this->render(TRUE), $this->config->get('config_compression'));
	}


	private function validate() {
		if (!$this->user->hasPermission('modify', 'payment/weipay')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}
	
		if (!$this->request->post['weipay_appid']) {
			$this->error['weipay_appid'] = $this->language->get('error_appid');
		}

		if (!$this->request->post['weipay_mchid']) {
			$this->error['weipay_mchid'] = $this->language->get('error_mchid');
		}

		if (!$this->request->post['weipay_appsecret']) {
			$this->error['weipay_appsecret'] = $this->language->get('error_appsecret');
		}

		if (!$this->request->post['weipay_key']) {
			$this->error['weipay_key'] = $this->language->get('weipay_key');
		}

		if (!$this->error) {
			return TRUE;
		} else {
			return FALSE;
		}	
	}
}
?>