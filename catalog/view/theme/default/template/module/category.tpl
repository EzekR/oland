<div class="box">
  <div class="box-heading"><?php echo $heading_title; ?></div>
  <div class="box-content">
<?php foreach ($categories as $category) { ?>
<div class="type_t">
  <?php if ($category['category_id'] == $category_id) { ?>
        <a href="<?php echo $category['href']; ?>" class="active"><?php echo $category['name']; ?></a>
        <?php } else { ?>
        <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
        <?php } ?>
</div>
<div class="mban mar_31">
  <img src="images/mban3.jpg" width="640">
</div>
<?php if ($category['children']) { ?>
<div class="like">
  <ul>
     <?php foreach ($category['children'] as $child) { ?>
      <li>
        <?php if ($child['category_id'] == $child_id) { ?>
          <div class="img"><a href="<?php echo $child['href']; ?>" class="active"><img src="<?php echo $child['image']; ?>" width="185" /></a>
          </div>                                        
            <div class="name">
                <a href="<?php echo $child['href']; ?>"><h2><?php echo $child['name']; ?></h2></a>
            </div>
        <?php } else { ?>
           <div class="img"><a href="<?php echo $child['href']; ?>" class="active"><img src="<?php echo $child['image']; ?>" width="185" /></a>
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

<!--ul class="box-category">
      <?php foreach ($categories as $category) { ?>
      <li>
        <?php if ($category['category_id'] == $category_id) { ?>
        <a href="<?php echo $category['href']; ?>" class="active"><?php echo $category['name']; ?></a>
        <?php } else { ?>
        <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
        <?php } ?>
        <?php if ($category['children']) { ?>
        <ul>
          <?php foreach ($category['children'] as $child) { ?>
          <li>
            <?php if ($child['category_id'] == $child_id) { ?>
            <a href="<?php echo $child['href']; ?>" class="active"> - <?php echo $child['name']; ?></a>
            <?php } else { ?>
            <a href="<?php echo $child['href']; ?>"> - <?php echo $child['name']; ?></a>
            <?php } ?>
          </li>
          <?php } ?>
        </ul>
        <?php } ?>
      </li>
      <?php } ?>
    </ul>
  </div>
</div>
