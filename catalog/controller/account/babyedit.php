<?php
	class ControllerAccountBabyedit extends controller
	{
		
		public  function index()
		{
			if (!$this->customer->isLogged()) {
				$this->session->data['redirect'] = $this->url->link('account/babyedit', '', 'SSL');
				$this->redirect($this->url->link('account/login', '', 'SSL'));
			}

			$this->load->model('account/addbaby');
			$this->data['baby_info'] = $this->model_account_addbaby->getBaby($this->session->data['customer_id']);
			foreach ($this->data['baby_info'] as $array) {
				$this->data['baby_name'] = $array['baby_name'];
				$this->data['baby_id'] = $array['baby_id']; 
			}


			if ($this->request->server['REQUEST_METHOD'] == 'POST') {
				$this->data['baby_id'] = $this->request->post['baby_id'];
				$this->model_account_addbaby->editBaby($this->data['baby_id']);

				$this->redirect($this->url->link('account/baby', '', 'SSL'));
			}

			$this->data['action'] = $this->url->link('account/babyedit', '', 'SSL');


			if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/account/babyedit.tpl')) {
				$this->template = $this->config->get('config_template') . '/template/account/babyedit.tpl';
			} else {
			$this->template = 'default/template/account/babyedit.tpl';
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