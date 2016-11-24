<?php echo $header; ?>
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <span class="icon icon-left pull-left"></span>
            <button class="button button-link button-nav pull-right" id="button-search">
            编辑
            </button>
                <h1 class="title">购物车</h1>
            </header>

   <nav class="bar bar-tab">
  <a class="tab-item external active" href="<?php echo $home; ?>">
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
  <a class="tab-item external" href="<?php echo $account; ?>">
    <span class="icon icon-cart"></span>
    <span class="tab-label">我的</span>
  </a>
</nav><?php echo $column_left; ?><?php echo $column_right; ?>
<div class="content"><?php echo $content_top; ?>
  <div class="content">
  <div class="row bg-img">
    <p style="text-align: center; margin: 0 auto; margin-top: 21rem; width: 50%">什么也没有</p>
  <div id="add-baby" class="button button-warning" style="text-align: center; margin: 0 auto; width: 50%"><a href="<?php echo $continue; ?>">去逛逛</a></div>
</div>
  <?php echo $content_bottom; ?></div>
<?php echo $footer; ?>