<?php echo $header; ?>
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <a href="#" class="open-popup"><button class="button button-link button-nav pull-left" id="button-city">
            苏州市
            <span class="icon icon-right"></span>
            </button></a>
            <button class="button button-link button-nav pull-right" id="button-search">
            <span class="icon icon-search"></span>
            </button>
                <h1 class="title">奥兰德海洋村</h1>
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
</nav>
<div class="content"><?php echo $content_top; ?></div>
</div>
</div> 
<?php echo $column_left; ?><?php echo $column_right; ?>

<?php echo $footer; ?>