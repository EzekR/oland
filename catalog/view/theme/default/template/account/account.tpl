<?php echo $header; ?>
<!--html content -->
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <button class="button button-link button-nav pull-left">
            <span class="icon icon-settings"></span>
            <button class="button button-link button-nav pull-right">
            <span class="icon icon-message"></span>
            </button>
                <h1 class="title">我</h1>
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

<div class="content">
 <div class="row acc-img">
   <div class="img-portrait">
     <img src="catalog/view/theme/default/image/outlander/baby_portrait.png">
   </div>
   <div class="row" style="margin-top: 1rem">
     <div class="col-50 acc-wish" style="border-right: 1px solid #000"><p>5</p><p>我关注的</p></div>
     <div class="col-50 acc-wish"><p>15</p><p>我收藏的</p></div>
   </div>
 </div>
 <div class="row acc-menu">
   <div class="col-25"><img src="catalog/view/theme/default/image/outlander/paying.png"><p>待付款</p></div>
   <div class="col-25"><img src="catalog/view/theme/default/image/outlander/subscribed.png"><p>已报名</p></div>
   <div class="col-25"><img src="catalog/view/theme/default/image/outlander/comment.png"><p>待评价</p></div>
   <div class="col-25"><img src="catalog/view/theme/default/image/outlander/attend.png"><p>已参加</p></div>
 </div>
 <div class="list-block list-acc">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-emoji"></span> 我的宝宝</div>
          <div class="item-after"><span class="icon icon-right"></span></div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-card"></span> 会员中心</div>
          <div class="item-after"><span class="icon icon-right"></span></div>
        </div>
      </li>
    </ul>
  </div>

<div class="list-block list-acc">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><a href="<?php echo $order; ?>"><span class="icon icon-cart"></span> 我购买的商品</a></div>
          <div class="item-after"><span class="icon icon-right"></span></div>
        </div>
        
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-refresh"></span> 售后/退款</div>
          <div class="item-after"><span class="icon icon-right"></span></div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-me"></span> 账户余额</div>
          <div class="item-after"></div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-star"></span> 我的积分</div>
          <div class="item-after"></div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-gift"></span> 我的优惠码</div>
          <div class="item-after"></div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-code"></span> 我的推荐码</div>
          <div class="item-after"></div>
        </div>
      </li>
    </ul>
  </div>

   <div class="list-block list-acc">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-phone"></span> 客服中心</div>
          <div class="item-after"></div>
        </div>
      </li>
    </ul>
  </div>
   <div class="list-block list-acc">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title"><span class="icon icon-friends"></span> 邀请朋友来海洋村</div>
          <div class="item-after"></div>
        </div>
      </li>
    </ul>
  </div>

  <div class="row" style="margin-left: 0; margin-bottom: 2rem; margin-top: 0.8rem">
    <a href="<?php echo $logout;?>" class="button button-big button-fill button-danger">退出登录</a>
  </div>
<?php if ($success) { ?>
<div class="success"><?php echo $success; ?></div>
<?php } ?>
<?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content"><?php echo $content_top; ?>
  <!--div class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>
  <h1><?php echo $heading_title; ?></h1>
  <h2><?php echo $text_my_account; ?></h2>
  <div class="content">
    <ul>
      <li><a href="<?php echo $edit; ?>"><?php echo $text_edit; ?></a></li>
      <li><a href="<?php echo $password; ?>"><?php echo $text_password; ?></a></li>
      <li><a href="<?php echo $address; ?>"><?php echo $text_address; ?></a></li>
      <li><a href="<?php echo $wishlist; ?>"><?php echo $text_wishlist; ?></a></li>
    </ul>
  </div>
  <h2><?php echo $text_my_orders; ?></h2>
  <div class="content">
    <ul>
      <li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
      <li><a href="<?php echo $download; ?>"><?php echo $text_download; ?></a></li>
      <?php if ($reward) { ?>
      <li><a href="<?php echo $reward; ?>"><?php echo $text_reward; ?></a></li>
      <?php } ?>
      <li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
      <li><a href="<?php echo $transaction; ?>"><?php echo $text_transaction; ?></a></li>
      <li><a href="<?php echo $recurring; ?>"><?php echo $text_recurring; ?></a></li>
    </ul>
  </div>
  <h2><?php echo $text_my_newsletter; ?></h2>
  <div class="content">
    <ul>
      <li><a href="<?php echo $newsletter; ?>"><?php echo $text_newsletter; ?></a></li>
    </ul>
  </div>
  <?php echo $content_bottom; ?></div-->
<?php echo $footer; ?> 