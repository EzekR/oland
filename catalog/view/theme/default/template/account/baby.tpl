<?php echo $header; ?>
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <button class="button button-link button-nav pull-right">
            <span class="icon icon-emoji"></span>
            </button>
                <h1 class="title">我的宝宝</h1>
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
  <a class="tab-item external active" href="<?php echo $baby; ?>">
    <span class="icon icon-star"></span>
    <span class="tab-label">成长</span>
  </a>
  <a class="tab-item external" href="<?php echo $account; ?>">
    <span class="icon icon-cart"></span>
    <span class="tab-label">我的</span>
  </a>
</nav>

<div class="content">
	<?php if (!$baby_info) {?>
	<div class="row bg-img">
	<div id="add-baby" class="button button-dark" style="text-align: center; margin: 0 auto; margin-top: 22rem; width: 50%"><a href="<?php echo $addbaby; ?>">添加宝宝</a></div>
</div>
<?php } else {?>
  <?php foreach ($baby_info as $array) {?>
  <div class="card">
    <div class="card-header"><a href="#" class="open-popup"><?php echo $array['baby_nickname']; ?></a></div>
    <div class="card-content">
      <div class="list-block media-list">
        <ul>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">宝宝姓名：<?php echo $array['baby_name'];?></div>
              </div>
              <div class="item-subtitle">宝宝性别：<?php if ($array['baby_gender'] == "male") {
                echo "男球";
              } else {
                echo "女球";
              }?>&nbsp&nbsp&nbsp宝宝生日：<?php echo $array['baby_birthday'];?></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <span><form action="<?php echo $baby_edit?>" method="post"><input type="hidden" name="baby_id" value="<?php echo $array['baby_id']; ?>"><input type="submit" value="删除宝宝" class="button button-fill button-danger"></form></span>
      <span><a href="<?php echo $addbaby; ?>" class="button button-fill button-success">添加宝宝</a></span>
    </div>
  </div>
  <?php }?>            
</div>
<div class="popup">
  	<div class="content-block">
    <div class="bg-baby">
		<img src="catalog/view/theme/default/image/outlander/baby_portrait.png" style="margin-top: 2rem; width: 90px; height: 90px;">
		<p><?php echo $array['baby_name'];?></p>
		<a href="#" class="button button-dark" style="width: 50%; margin: 0 auto;">开通会员</a>
    </div>
    <div class="row baby-menu">
    	<div class="col-20"><img src="catalog/view/theme/default/image/outlander/baby_0.png">秀萌照</div>
    	<div class="col-20"><img src="catalog/view/theme/default/image/outlander/baby_1.png">能力阶梯</div>
    	<div class="col-20"><img src="catalog/view/theme/default/image/outlander/baby_2.png">宝贝体格</div>
    	<div class="col-20"><img src="catalog/view/theme/default/image/outlander/baby_3.png">邀请亲</div>
    	<div class="col-20"><img src="catalog/view/theme/default/image/outlander/baby_4.png">宝宝日程</div>
    </div>
    <div class="row baby-data"><h3>暂无数据</h3></div>
  	</div>
	</div>
<?php }?>
	</div>
</div>
<!--?php print_r($customer_id); ?><br-->
<!--?php print_r($_POST); ?-->

<br>
<br><br><br><br>
<?php echo $footer; ?> 