<?php foreach ($banners as $banner) { ?>
  <div class="swiper-slide" style="width: <?php echo $width; ?>px; height: <?php echo $height; ?>px;">

    <?php if ($banner['link']) { ?>
    <a href="<?php echo $banner['link']; ?>"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" /></a>
    <?php } else { ?>
    <img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" />
    <?php } ?>

  </div>
<?php } ?>
