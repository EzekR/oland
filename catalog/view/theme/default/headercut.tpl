    <meta charset="utf-8" />
    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
    Remove this if you use the .htaccess -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title></title>
    <meta name="description" content="" />
    <meta name="author" content="Administrator" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
    <!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
    
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="stylesheet" href="catalog/view/theme/default/stylesheet/base.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
    <link rel="stylesheet" href="catalog/view/theme/default/stylesheet/bootstrap.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
    <link rel="stylesheet" href="catalog/view/theme/default/stylesheet/common.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
    <link rel="stylesheet" href="catalog/view/theme/default/stylesheet/device.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
    <link rel="stylesheet" href="catalog/view/theme/default/stylesheet/jquery.bxslider.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
    <script type="text/javascript" src="catalog/view/javascript/jquery/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js"></script>
    <link rel="stylesheet" type="text/css" href="catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css" />
    <script type="text/javascript" src="catalog/view/javascript/common.js"></script>
    <?php foreach ($scripts as $script) { ?>
    <script type="text/javascript" src="<?php echo $script; ?>"></script>
    <?php } ?>
           
    <script src="catalog/view/javascript/jquery-1.7.2.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="catalog/view/javascript/jquery.bxslider.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="catalog/view/javascript/jquery/bootstrap/bootstrap.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="catalog/view/javascript/common.js"></script>
    <!--[if IE]>
    <script src="js/html5.js"></script>
    <![endif]-->
    <script>
        $(document).ready(function() {
            $('.bxslider').bxSlider({
                auto : true,
                controls : false,
                touchEnabled : true,
            });
        });
    </script>
<!--script type="text/javascript" src="catalog/view/javascript/jquery/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js"></script-->
<!--link rel="stylesheet" type="text/css" href="catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css" />
<script type="text/javascript" src="catalog/view/javascript/common.js"></script>
<?php foreach ($scripts as $script) { ?>
<script type="text/javascript" src="<?php echo $script; ?>"></script>
<?php } ?>
<!--[if IE 7]> 
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/ie7.css" />
<![endif]-->
<!--[if lt IE 7]>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/ie6.css" />
<script type="text/javascript" src="catalog/view/javascript/DD_belatedPNG_0.0.8a-min.js"></script>
<script type="text/javascript">
DD_belatedPNG.fix('#logo img');
</script>
<![endif]-->
<!--?php if ($stores) { ?>
<script type="text/javascript"><!--
$(document).ready(function() {
<?php foreach ($stores as $store) { ?>
$('body').prepend('<iframe src="<?php echo $store; ?>" style="display: none;"></iframe>');
<?php } ?>
});
//--><!--/script-->
<!--?php } ?-->