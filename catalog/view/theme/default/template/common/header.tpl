<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!--link rel="stylesheet" href="catalog/view/theme/default/stylesheet/sm.css"-->
    <!--link rel="stylesheet" href="catalog/view/theme/default/stylesheet/sm-extend.css"-->
    <link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/light7.css">
    <link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/light7-swiper.css">
    <link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/light7-swipeout.css">
    <link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/custom.css">
    <script type="text/javascript" src="catalog/view/javascript/jquery/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="catalog/view/javascript/light7.js"></script>
    <script type="text/javascript" src="catalog/view/javascript/light7-swipeout.js"></script>
    <script type="text/javascript" src="catalog/view/javascript/light7-swiper.js"></script>
    <!--script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
    <script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js' charset='utf-8'></script>
    <script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script-->
    <script type="text/javascript" src="catalog/view/javascript/common.js"></script>
    <!-- jquery cart add and minus-->
    <script> 
$(function(){ 
$(".add").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 
t.val(parseInt(t.val())+1) 
setTotal(); 
}) 
$(".min").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 
t.val(parseInt(t.val())-1) 
if(parseInt(t.val())<0){ 
t.val(0); 
} 
setTotal(); 
}) 
function setTotal(){ 
var s=0; 
$("#tab td").each(function(){ 
s+=parseInt($(this).find('input[class*=text_box]').val())*parseFloat($(this).find('span[class*=price]').text()); 
}); 
$("#total").html(s.toFixed(2)); 
} 
setTotal(); 

}) 
</script>
<?php echo $google_analytics; ?>
</head>
<body>
