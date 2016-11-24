<?php
	class ControllerAccountBabymmr extends controller {
		public function index() {
			if (!$this->customer->isLogged()) {
				$this->session->data['redirect'] = $this->url->link('account/account', '', 'SSL');

				$this->redirect($this->url->link('account/login', '', 'SSL'));
			}

			$this->data['customer_id'] = $this->session->data['customer_id'];


			if (isset($this->session->data['success'])) {
				$this->data['success'] = $this->session->data['success'];

			unset($this->session->data['success']);
				} else {
			$this->data['success'] = '';

			}
			
			$this->load->model('account/order');



			if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/account/babymmr.tpl')) {
				$this->template = $this->config->get('config_template') . '/template/account/babymmr.tpl';
			} else {
				$this->template = 'default/template/account/babymmr.tpl';
			}

			$this->children = array(
			'common/column_left',
			'common/column_right',
			'common/content_top',
			'common/content_bottom',
			'common/footer',
			'common/header'		
		);

			$this->response->setOutput($this->render());

		}
	}
?>