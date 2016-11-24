<?php echo $header; ?>

<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <a href="<?php echo $cart; ?>"><button class="button button-link button-nav pull-left">
            <span class="icon icon-cart"></span></a>
            </button>
            <button class="button button-link button-nav pull-right">
            <span class="icon icon-search"></span>
            </button>
                <h1 class="title">周边</h1>
            </header>

   <nav class="bar bar-tab">
  <a class="tab-item external" href="<?php echo $home; ?>">
    <span class="icon icon-home"></span>
    <span class="tab-label">首页</span>
  </a>
  <a class="tab-item external active" href="<?php echo $mart; ?>">
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

<div class="content">
  <div class="buttons-tab">
    <a href="#tab1" class="tab-link active button">商城</a>
    <a href="#tab2" class="tab-link button">玩具</a>
    <a href="#tab3" class="tab-link button">母婴</a>
    <a href="#tab4" class="tab-link button">家电</a>
  </div>
  <div class="content-block">
    <div class="tabs">
      <div id="tab1" class="tab active">
        <div class="content-block">
          <div style="display: flex; background-color: #fff">
            <div style="width: 40%; border-right: 1px solid #a9a9a9">
              <div class="img-container"><a href="<?php echo $kill; ?>">
            <img src="catalog/view/theme/default/image/outlander/kill.png">
            品牌玩具秒杀
            <img src="catalog/view/theme/default/image/outlander/kill_img.png"></a>
            </div>
            </div>
            <div style="width: 60%; display: flex; flex-wrap: wrap ">
              <div style="width: 50%; border-right: 1px solid #a9a9a9; border-bottom: 1px solid #a9a9a9">
              <div class="sub-container">
              <img src="catalog/view/theme/default/image/outlander/rabbit_1.png"><br>
              热门玩具精选
              <img src="catalog/view/theme/default/image/outlander/rua_1.png">
              </div>
              </div>
              <div style="width: 50%; border-bottom: 1px solid #a9a9a9">
                <div class="sub-container">
                <img src="catalog/view/theme/default/image/outlander/rabbit_2.png"><br>
                低价限量抢
                <img src="catalog/view/theme/default/image/outlander/rua_2.png">
                </div>
              </div>
              <div style="width: 50%; border-right: 1px solid #a9a9a9;">
              <div class="sub-container">
              <img src="catalog/view/theme/default/image/outlander/mom.png"><br>
              低价限量抢
              <img src="catalog/view/theme/default/image/outlander/rua_3.png">
              </div>
              </div>
              <div style="width: 50%;">
                <div class="sub-container">
                  <img src="catalog/view/theme/default/image/outlander/oversea.png"><br>
                  低价限量抢
                  <img src="catalog/view/theme/default/image/outlander/rua_4.png">
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="background-color: #fff; margin-top: 0.8rem">
      <div class="col-25" style="border-right: 1px solid #a9a9a9; height: 117px">
        <div class="cat-md">
        <h6>手工DIY</h6>
        <h6>开发无限可能</h6>
        <img src="catalog/view/theme/default/image/outlander/cat-1.png">
      </div>
      </div>
      <div class="col-25" style="border-right: 1px solid #a9a9a9; height: 117px">
      <div class="cat-md">
        <h6>益智积木</h6>
        <h6>欧洲原产榉木</h6>
        <img src="catalog/view/theme/default/image/outlander/cat-2.png">        
      </div>
      </div>
      <div class="col-25" style="border-right: 1px solid #a9a9a9">
        <div class="cat-md">
        <h6>磁力片</h6>
        <h6>宝宝健康玩具</h6>
        <img src="catalog/view/theme/default/image/outlander/cat-3.png">        
      </div>
      </div>
      <div class="col-25">
        <div class="cat-md">
        <h6>手工DIY</h6>
        <h6>开发无限可能</h6>
        <img src="catalog/view/theme/default/image/outlander/cat-4.png">        
      </div>
      </div>
</div>
        </div>
      </div>
      <div id="tab2" class="tab">
        <div class="content-block">
          <div class="row" style="background: #fff; line-height: 2rem">
            <?php foreach ($toy_children as $toy_child) {?>
              &nbsp&nbsp<span><?php echo $toy_child['name'];?></span>&nbsp
            <?php }?>
          </div>
          <div class="row" style="display: flex; flex-wrap: wrap">
            <?php foreach ($products as $product) {?>
              <div class="col-50" style="margin-left: 2%; background: #fff">
                <a href="<?php echo $product['href']; ?>">
                <img class="list-img" src="<?php echo $product['thumb'];?>" style="width: 8rem">
                <div class="product-info">
                <?php echo $product['name']; ?>
                <?php echo $product['price']; ?>
                </div>
                </a>
              </div>
            <?php }?>
          </div>
        </div>
      </div>
      <div id="tab3" class="tab">
        <div class="content-block">
          <div class="row" style="background: #fff; line-height: 2rem">
            <?php foreach ($baby_children as $baby_child) {?>
              &nbsp&nbsp<span><?php echo $baby_child['name'];?></span>&nbsp
            <?php }?>
          </div>
          <div class="row" style="display: flex; flex-wrap: wrap">
            <?php foreach ($products_baby as $product_baby) {?>
              <div class="col-50" style="margin-left: 2%; background: #fff">
                <a href="<?php echo $product_baby['href']; ?>">
                <img class="list-img" src="<?php echo $product_baby['thumb'];?>" style="width: 8rem">
                <div class="product-info">
                <?php echo $product_baby['name']; ?>
                <?php echo $product_baby['price']; ?>
                </div>
                </a>
              </div>
            <?php }?>
          </div>
        </div>
        </div>
      <div id="tab4" class="tab">
        <div class="content-block">
          <div class="row bg-img">
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-15">&nbsp</div>
      <div class="col-20"><hr></div>
      <div class="col-25" style="text-align: center">精品商城</div>
      <div class="col-20"><hr></div>
      <div class="col-15">&nbsp</div>
    </div>
</div>
  <div class="box-heading"><?php echo $heading_title; ?></div>
  <div class="box-content" style="display: none">
<?php foreach ($categories as $category) { ?>
<div class="type_t">
  <?php if ($category['category_id'] == $category_id) { ?>
        <a href="<?php echo $category['href']; ?>" class="active"><?php echo $category['name']; ?></a>
        <?php } else { ?>
        <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
        <?php } ?>
</div>
<!--div class="mban mar_31">
  <img src="<?php echo "image/".$category['image']; ?>" width="640">
</div-->
<?php if ($category['children']) { ?>
<div class="like">
  <ul>
     <?php foreach ($category['children'] as $child) { ?>
      <li>
        <?php if ($child['category_id'] == $child_id) { ?>
          <div class="img"><a href="<?php echo $child['href']; ?>" class="active"><img src="<?php echo "image/".$child['image']; ?>" width="185" /></a>
          </div>                                        
            <div class="name">
                <a href="<?php echo $child['href']; ?>"><h2><?php echo $child['name']; ?></h2></a>
            </div>
        <?php } else { ?>
           <div class="img"><a href="<?php echo $child['href']; ?>" class="active"><img src="<?php echo "image/".$child['image']; ?>" width="185" /></a>
          </div>                                        
            <div class="name">
                <a href="<?php echo $child['href']; ?>"><h2><?php echo $child['name']; ?></h2></a>
            </div>
            <?php } ?>
        </li>
        <?php } ?>
      </ul>
    </div>
    <?php } ?>
  <?php } ?>
</div>
</div>
<?php echo $footer; ?>