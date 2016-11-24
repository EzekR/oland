<?php echo $header; ?>
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <span class="icon icon-left pull-left back"></span>
                <h1 class="title">成功！</h1>
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
  <a class="tab-item external" href="<?php echo $account; ?>">
    <span class="icon icon-cart active"></span>
    <span class="tab-label">我的</span>
  </a>
</nav>
<div class="content">
  <div class="row" style="height: 400px; text-align: center">
  <a class="button button-fill button-success" href="<?php echo HTTP_SERVER; ?>" style="margin-top: 4rem">继续</a>
  </div>
</div>
<?php echo $footer; ?>