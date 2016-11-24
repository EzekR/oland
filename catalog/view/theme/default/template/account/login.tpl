<?php echo $header; ?>
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <a href="<?php echo $register; ?>"><button class="button button-link button-nav pull-left">
            注册
            <span class="icon icon-me"></span>
            </a>
            </button>
            <button class="button button-link button-nav pull-right">
            <span class="icon icon-search"></span>
            </button>
                <h1 class="title">登陆</h1>
            </header>
               <nav class="bar bar-tab">
  <a class="tab-item external" href="<?php echo $home; ?>">
    <span class="icon icon-home"></span>
    <span class="tab-label">首页</span>
  </a>
  <a class="tab-item external" href="<?php echo $mart; ?>">
    <span class="icon icon-me"></span>
    <span class="tab-label">周边</span>
  </a>
  <a class="tab-item external" href="<?php echo $baby; ?>">
    <span class="icon icon-star"></span>
    <span class="tab-label">成长</span>
  </a>
  <a class="tab-item external active" href="<?php echo $account; ?>">
    <span class="icon icon-cart"></span>
    <span class="tab-label">我的</span>
  </a>
</nav>
<?php if ($success) { ?>
<div class="success"><?php echo $success; ?></div>
<?php } ?>
<?php if ($error_warning) { ?>
<div class="warning"><?php echo $error_warning; ?></div>
<?php } ?>
<?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content"><?php echo $content_top; ?>    
<!--End Header End-->
<div class="content">
<div class="list-block">
  <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
        <ul> 
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">账号</div>
                    <div class="item-input">
                    <input type="text" value="<?php echo $telephone; ?>" name="telephone" placeholder="请输入账号" class="l_ipt">
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">密码</div>
                    <div class="item-input">
                    <input type="password" value="<?php echo $telephone; ?>" name="telephone" placeholder="请输入账号" class="l_ipt">
                    </div>
                  </div>
                </div>
              </li>
              <li>
               <div class="item-content">
                 <div class="item-media"><i class="icon icon-form-toggle"></i></div>
                   <div class="item-inner">
                     <div class="item-title label">自动登陆</div>
                      <div class="item-input">
                     <label class="label-switch">
                      <input type="checkbox" value="" checked="checked">
                      <div class="checkbox"></div>
                    </label>
            </div>
          </div>
        </div>
      </li>
      </ul>
      <div class="content-block">
        <div class="row"><input type="submit" value="登陆" class="button button-big button-fill button-success"></div>
      </div>

    </form>
</div>

<!--div class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>
  <h1><?php echo $heading_title; ?></h1>
  <div class="login-content">
    <div class="left">
      <h2><?php echo $text_new_customer; ?></h2>
      <div class="content">
        <p><b><?php echo $text_register; ?></b></p>
        <p><?php echo $text_register_account; ?></p>
        <a href="<?php echo $register; ?>" class="button"><?php echo $button_continue; ?></a></div>
    </div>
    <div class="right">
      <h2><?php echo $text_returning_customer; ?></h2>
      <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
        <div class="content">
          <p><?php echo $text_i_am_returning_customer; ?></p>
          <b><?php echo $entry_email; ?></b><br />
          <input type="text" name="email" value="<?php echo $email; ?>" />
          <br />
          <br />
          <b><?php echo $entry_password; ?></b><br />
          <input type="password" name="password" value="<?php echo $password; ?>" />
          <br />
          <a href="<?php echo $forgotten; ?>"><?php echo $text_forgotten; ?></a><br />
          <br />
          <input type="submit" value="<?php echo $button_login; ?>" class="button" />
          <?php if ($redirect) { ?>
          <input type="hidden" name="redirect" value="<?php echo $redirect; ?>" />
          <?php } ?>
        </div>
      </form>
    </div>
  </div-->
  <?php echo $content_bottom; ?><!--/div-->
<script type="text/javascript"><!--
$('#login input').keydown(function(e) {
	if (e.keyCode == 13) {
		$('#login').submit();
	}
});
//--></script> 
<?php echo $footer; ?>