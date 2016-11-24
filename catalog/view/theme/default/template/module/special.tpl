<div class="box">
  <div class="box-heading">限时秒杀</div>
  <div class="box-content">
    <div class="box-product">
<div class="tj_c">
  <ul>
      <?php foreach ($products as $product) { ?>
      <li>
        <?php if ($product['thumb']) { ?>
        <div class="img"><a href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>" /></a></div>
        <?php } ?>
        <div class="name"><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a>
        <?php if ($product['special']) { ?>
        <div class="price">
          
          <?php echo $product['special']; ?>
         
        </div>
        <?php } ?>
        <?php if ($product['rating']) { ?>
        <div class="rating"><img src="catalog/view/theme/default/image/stars-<?php echo $product['rating']; ?>.png" alt="<?php echo $product['reviews']; ?>" /></div>
        <?php } ?>
        <div class="cart"><input type="button" class="button button-fill button-warning" value="<?php echo $button_cart; ?>" onclick="addToCart('<?php echo $product['product_id']; ?>');"/></div>
      </div>
    </li>
      <?php } ?>
    </div>
  </div>
</div>
