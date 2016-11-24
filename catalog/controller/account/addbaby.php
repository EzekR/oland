<?php
class ControllerAccountAddbaby extends Controller {

	private $error = array();

	public function index() {
		if (!$this->customer->isLogged()) {
			$this->session->data['redirect'] = $this->url->link('account/account', '', 'SSL');

			$this->redirect($this->url->link('account/login', '', 'SSL'));
		}
		$this->data['home'] = $this->url->link('common/home', '', 'SSL');
		$this->data['mart'] = $this->url->link('product/list', '', 'SSL');
		$this->data['baby'] = $this->url->link('account/baby', '', 'SSL');
		$this->data['account'] = $this->url->link('account/account', '', 'SSL');		
		$this->data['category'] = $this->url->link('product/category', '', 'SSL');


		$this->data['addbaby'] = $this->url->link('account/addbaby', '', 'SSL');

		$this->data['baby'] = $this->url->link('account/baby', '', 'SSL');
		$this->data['action'] = $this->url->link('account/baby', '', 'SSL');

		$this->data['customer_id'] = $this->session->data['customer_id'];

		if (isset($this->session->data['success'])) {
			$this->data['success'] = $this->session->data['success'];

			unset($this->session->data['success']);
		} else {
			$this->data['success'] = '';
		}

		$this->load->model('account/addbaby');

		if (($this->request->server['REQUEST_METHOD'] == 'POST')) {
			$this->model_account_addbaby->addBaby($this->request->post);

			$this->session->data['gender'] = $this->request->post['gender'];
			$this->session->data['babyname'] = $this->request->post['babyname'];
			$this->session->data['nickname'] = $this->request->post['nickname'];
			$this->session->data['babybirthday'] = $this->request->post['babybirthday'];
			//$this->session->data['role'] = $this->request->post['role']; 

		}


		if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/account/addbaby.tpl')) {
				$this->template = $this->config->get('config_template') . '/template/account/addbaby.tpl';
			} else {
				$this->template = 'default/template/account/addbaby.tpl';
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