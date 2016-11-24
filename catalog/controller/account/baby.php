<?php
	class ControllerAccountBaby extends Controller {
		public function index() {
			if (!$this->customer->isLogged() ) {
				$this->session->data['redirect'] = $this->url->link('account/account', '', 'SSL');

				$this->redirect($this->url->link('account/login', '', 'SSL'));
			}

			$this->data['baby'] = $this->url->link('account/baby', '', 'SSL');
			$this->data['addbaby'] = $this->url->link('account/addbaby', '', 'SSL');
			$this->data['customer_id'] = $this->session->data['customer_id'];
			$this->data['baby_edit'] = $this->url->link('account/babyedit', '', 'SSL');
			$this->data['baby_mmr'] = $this->url->link('account/babymmr', '', 'SSL');
			$this->data['home'] = $this->url->link('common/home', '', 'SSL');
			$this->data['mart'] = $this->url->link('product/list', '', 'SSL');
			$this->data['baby'] = $this->url->link('account/baby', '', 'SSL');
			$this->data['account'] = $this->url->link('account/account', '', 'SSL');		

			$this->load->model('account/addbaby');

			if (($this->request->server['REQUEST_METHOD'] == 'POST')) {
				$this->model_account_addbaby->addBaby($this->request->post);

				$this->session->data['gender'] = $this->request->post['gender'];
				$this->session->data['babyname'] = $this->request->post['babyname'];
				$this->session->data['nickname'] = $this->request->post['nickname'];
				$this->session->data['babybirthday'] = $this->request->post['babybirthday'];
			//$this->session->data['role'] = $this->request->post['role']; 

			}


			if (isset($this->session->data['success'])) {
				$this->data['success'] = $this->session->data['success'];

			unset($this->session->data['success']);
			} else {
			$this->data['success'] = '';

		}

			$this->load->model('account/addbaby');

			$this->data['baby_info'] = $this->model_account_addbaby->getBaby($this->data['customer_id']);
			foreach ($this->data['baby_info'] as $array) {
				$this->data['baby_name'] = $array['baby_name'];
				$this->data['baby_id'] = $array['baby_id'];
			}
			
			if (isset($this->request->post['gender'])) {
				$this->data['gender'] = $this->request->post['gender'];
			} else {
				$this->data['gender'] = '';
			}

			if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/account/baby.tpl')) {
				$this->template = $this->config->get('config_template') . '/template/account/baby.tpl';
			} else {
				$this->template = 'default/template/account/baby.tpl';
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