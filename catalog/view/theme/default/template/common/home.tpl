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
<script type="text/javascript">
    $("#button-search").click(function(){
      $("#search-block").toggle(300);
  });
</script>
<div class="popup popup-about">
  <div class="content-block">
    <div class="row"><p style="background: #DCDCDC">当前城市</p></div>
    <div class="row city-now">
      <p style="margin-top: 1rem; width: 3rem"><a href="#" class="button button-fill button-warning">苏州</a></p>
    </div>
    <div class="row"><p style="background: #DCDCDC">已开通城市</p></div>
    <div class="row" style="width: 4rem; margin-top: 10rem"><a href="#" class="close-popup button button-fill button-danger" >返回</a></div>
  </div>
</div>
<!-- slider -->
<div class="content">
  <div class="bar bar-header-secondary" id="search-block" style="display: none; top: 0rem; position: initial">
  <div class="searchbar">
    <a class="searchbar-cancel">取消</a>
    <div class="search-input">
      <label class="icon icon-search button-search" for="search"></label>
      <input type="text" name="search" placeholder="输入关键字" value="<?php echo $search; ?>"/>
    </div>
  </div>
</div>
  <!-- Slider -->
  <div class="swiper-container" data-space-between='10'>
    <div class="swiper-wrapper">
      <?php echo $content_top; ?>
    </div>
    <div class="swiper-pagination"></div>
  </div>

  <div class="row home-menu">
    <div class="col-25">
      <a href="<?php echo $home;?>"><img src="catalog/view/theme/default/image/outlander/icon1.png">
      <h3>欢乐天堂</h3></a>
    </div>
    <div class="col-25">
      <a href="<?php echo $home;?>"><img src="catalog/view/theme/default/image/outlander/icon2.png">
      <h3>理想源泉</h3></a>
    </div>
    <div class="col-25">
      <a href="<?php echo $home;?>"><img src="catalog/view/theme/default/image/outlander/icon3.png">
      <h3>亲子俱乐部</h3></a>
    </div>
    <div class="col-25">
      <a href="<?php echo $home;?>"><img src="catalog/view/theme/default/image/outlander/icon4.png">
      <h3>海洋指南</h3></a>
    </div>
  </div>
  <div class="row">
    <div class="col-15">&nbsp</div>
    <div class="col-25" style="margin-top: 0.1rem"><hr></div>
    <div class="col-20" style="text-align: center; margin-top: 0; margin-bottom: 0;"><p style="font-size: 0.7rem">主题活动</p></div>
    <div class="col-25" style="margin-top: 0.1rem"><hr></div>
    <div class="col-15">&nbsp</div>
  </div>
  <div class="row theme-activity">
    <div class="col-33" style="margin-left: 8%; height: 180px; border-right: 1px solid #efeff4;">
      <div class="img-container">
      <h4>天空下的梦想</h4>
      <p>开启宝宝想象力</p>
      <img src="catalog/view/theme/default/image/outlander/sky.png">
      </div>
    </div>
    <div class="col-33" style="margin-left: 2%; height: 180px; border-right: 1px solid #efeff4">
      <div class="row">
        <div class="img-container">
          <h4 style="color: #5CF14A; text-align: center">想象空间</h4>
          <p style="text-align: center">萌娃的理想源泉</p>
          <img src="catalog/view/theme/default/image/outlander/imagine.png">
        </div>
      </div>
    </div>
    <div class="col-33">
      <div class="img-container" style="margin-left: 0.1rem">
      <h4 style="color: #FFA500">狂欢派对</h4>
      <p>亲子狂欢俱乐部</p>
      <img src="catalog/view/theme/default/image/outlander/party.png">
      </div>
    </div>
  </div>
<?php echo $content_bottom; ?></div>
</div>
</div>
<?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content"><?php echo $content_top; ?>
<h1 style="display: none;"><?php echo $heading_title; ?></h1>

<?php echo $footer; ?>