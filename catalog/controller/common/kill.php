<?php  
class ControllerCommonKill extends Controller {
	public function index() {
		$this->document->setTitle($this->config->get('config_title'));
		$this->document->setDescription($this->config->get('config_meta_description'));

		$this->data['heading_title'] = $this->config->get('config_title');
		$this->data['login'] = $this->url->link('account/login', '', 'SSL');
		
		if (isset($this->request->get['search'])) {
			$this->data['search'] = $this->request->get['search'];
		} else {
			$this->data['search'] = '';
		}
		
		if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/common/kill.tpl')) {
			$this->template = $this->config->get('config_template') . '/template/common/kill.tpl';
		} else {
			$this->template = 'default/template/common/kill.tpl';
		}

		$this->data['home'] = $this->url->link('common/home', '', 'SSL');
		$this->data['mart'] = $this->url->link('product/list', '', 'SSL');
		$this->data['baby'] = $this->url->link('account/baby', '', 'SSL');
		$this->data['account'] = $this->url->link('account/account', '', 'SSL');		
		
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