<?php echo $header; ?>
<div id="content">
  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>
  <?php if ($error_warning) { ?>
  <div class="warning"><?php echo $error_warning; ?></div>
  <?php } ?>
  <div class="box">
    <div class="heading">
    <h1 ><?php echo $heading_title; ?></h1>
    <div class="buttons"><a onclick="$('#form').submit();" class="button"><span><?php echo $button_save; ?></span></a><a onclick="location='<?php echo $cancel; ?>';" class="button"><span><?php echo $button_cancel; ?></span></a></div>
  </div>
  <div class="content">
    <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="form">
      <table class="form">
				<tr>
          <td><span class="required">*</span> <?php echo $entry_key; ?></td>
          <td><input type="text" name="weipay_key" value="<?php echo $weipay_key; ?>" size="50" />
	 		 <?php if ($error_key) { ?>
            <span class="error"><?php echo $error_key; ?></span>
            <?php } ?></td>
        </tr>
				<tr>
          <td><span class="required">*</span> <?php echo $entry_appid; ?></td>
          <td><input type="text" name="weipay_appid" value="<?php echo $weipay_appid; ?>" size="50" />
	  		<?php if ($error_appid) { ?>
            <span class="error"><?php echo $error_appid; ?></span>
            <?php } ?></td>
        </tr>
				<tr>
          <td><span class="required">*</span> <?php echo $entry_mchid; ?></td>
          <td><input type="text" name="weipay_mchid" value="<?php echo $weipay_mchid; ?>" size="50" />
	  		<?php if ($error_mchid) { ?>
            <span class="error"><?php echo $error_mchid; ?></span>
            <?php } ?></td>
        </tr>
				<tr>
          <td><span class="required">*</span> <?php echo $entry_appsecret; ?></td>
          <td><input type="text" name="weipay_appsecret" value="<?php echo $weipay_appsecret; ?>" size="50" />
	  		<?php if ($error_appsecret) { ?>
            <span class="error"><?php echo $error_appsecret; ?></span>
            <?php } ?></td>
        </tr>
        <tr>
          <td><?php echo $entry_order_status; ?></td>
          <td><select name="weipay_order_status_id">
              <?php foreach ($order_statuses as $order_status) { ?>
              <?php if ($order_status['order_status_id'] == $weipay_order_status_id) { ?>
              <option value="<?php echo $order_status['order_status_id']; ?>" selected="selected"><?php echo $order_status['name']; ?></option>
              <?php } else { ?>
              <option value="<?php echo $order_status['order_status_id']; ?>"><?php echo $order_status['name']; ?></option>
              <?php } ?>
              <?php } ?>
            </select></td>
        </tr>
        <tr>
          <td><?php echo $entry_status; ?></td>
          <td><select name="weipay_status">
              <?php if ($weipay_status) { ?>
              <option value="1" selected="selected"><?php echo $text_enabled; ?></option>
              <option value="0"><?php echo $text_disabled; ?></option>
              <?php } else { ?>
              <option value="1"><?php echo $text_enabled; ?></option>
              <option value="0" selected="selected"><?php echo $text_disabled; ?></option>
              <?php } ?>
            </select></td>
        </tr>
        <tr>
          <td><?php echo $entry_sort_order; ?></td>
          <td><input type="text" name="weipay_sort_order" value="<?php echo $weipay_sort_order; ?>" size="1" /></td>
        </tr>
				<tr>
          <td>&nbsp;</td>
          <td>使用注意已经存在CNY的人民币汇率设置。Code为CNY</td>
        </tr>
      </table>
    </form>
  </div>
</div>
<?php echo $footer; ?>