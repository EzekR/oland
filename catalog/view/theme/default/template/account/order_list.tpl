<?php echo $header; ?><?php echo $column_left; ?><?php echo $column_right; ?>
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
<button class="button button-link button-nav pull-left">
            <a href="<?php echo $account; ?>"><span class="icon icon-left back"></span></a>
            </button>
                <h1 class="title">我的订单</h1>
            </header>
<div class="content">
  <?php if ($orders) { ?>
  <?php foreach ($orders as $order) { ?>
  <div class="card">
    <div class="card-header">订单号：<?php echo $order['order_id']; ?></div>
    <div class="card-content">
      <div class="card-content-inner">
        下单时间：<?php echo $order['date_added'];?><br>
        订单状态：<?php echo $order['status'];?><br>
        订单金额：<?php echo $order['total'];?><br>
      </div>
    </div>
    <div class="card-footer"><a href="<?php echo $order['href'];?>">订单详情</a></div>
  </div>
  <?php } ?>
  <?php } else { ?>
  <div class="content"><?php echo $text_empty; ?></div>
  <?php } ?>
  <div class="button button-fill button-warning">
    <a href="<?php echo $continue; ?>"><p style="color: #fff">继续</p></a>
  </div>
  <?php echo $content_bottom; ?></div>
<!--div id="content"><?php echo $content_top; ?>
  <?php if ($orders) { ?>
  <?php foreach ($orders as $order) { ?>
  <div class="order-list">
    <div class="order-id"><b><?php echo $text_order_id; ?></b> #<?php echo $order['order_id']; ?></div>
    <div class="order-status"><b><?php echo $text_status; ?></b> <?php echo $order['status']; ?></div>
    <div class="order-content">
      <div><b><?php echo $text_date_added; ?></b> <?php echo $order['date_added']; ?><br />
        <b><?php echo $text_products; ?></b> <?php echo $order['products']; ?></div>
      <div><b><?php echo $text_customer; ?></b> <?php echo $order['name']; ?><br />
        <b><?php echo $text_total; ?></b> <?php echo $order['total']; ?></div>
      <div class="order-info"><a href="<?php echo $order['href']; ?>"><img src="catalog/view/theme/default/image/info.png" alt="<?php echo $button_view; ?>" title="<?php echo $button_view; ?>" /></a>&nbsp;&nbsp;<a href="<?php echo $order['reorder']; ?>"><img src="catalog/view/theme/default/image/reorder.png" alt="<?php echo $button_reorder; ?>" title="<?php echo $button_reorder; ?>" /></a></div>
    </div>
  </div>
  <?php } ?>
  <div class="pagination"><?php echo $pagination; ?></div>
  <?php } else { ?>
  <div class="content"><?php echo $text_empty; ?></div>
  <?php } ?>
  <div class="buttons">
    <div class="right"><a href="<?php echo $continue; ?>" class="button"><?php echo $button_continue; ?></a></div>
  </div>
  <?php echo $content_bottom; ?></div-->
  </div>
<?php echo $footer; ?>