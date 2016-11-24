  <div class="row">
    <div class="col-15">&nbsp</div>
    <div class="col-25" style="margin-top: 0.1rem"><hr></div>
    <div class="col-20" style="text-align: center; margin-top: 0; margin-bottom: 0;"><p style="font-size: 0.7rem">热门活动</p></div>
    <div class="col-25" style="margin-top: 0.1rem"><hr></div>
    <div class="col-15">&nbsp</div>
  </div>
  <div class="row">
  <?php foreach ($products as $product) { ?>
  <div class="card">
  <div class="card-content">
  <div class="card-content-inner">
    <?php if ($product['thumb']) { ?>
    <a href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>" /></a>
    <?php } ?>
    <a href="<?php echo $product['href']; ?>"><p><?php echo $product['name']; ?></p></a></div>
  </div>
  </div> 
  <?php }?>
</div>
</div>
