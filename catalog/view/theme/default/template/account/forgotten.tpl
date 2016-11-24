<?php echo $header; ?>
<?php if ($error_warning) { ?>
<div class="warning"><?php echo $error_warning; ?></div>
<?php } ?>
<?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content"><?php echo $content_top; ?>
  <div class="back_bg">
    <table border="0" style="width:92%; color:#FFF; margin:0 auto;" cellspacing="0" cellpadding="0">
      <tr>
        <td style="text-align:left;"><a href="<?php echo $back; ?>">取消</a></td>
        <td style="text-align:center; font-size:1.2em;">忘记密码</td>
        <td style="text-align:right;"><a href="<?php echo $register; ?>">注册</a></td>
      </tr>
    </table>        
</div>
<div class="login_bg">
      <p><?php echo $text_email; ?></p>
    <h2><?php echo $text_your_email; ?></h2>
  <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
        <div class="log_tab"> 
            <div class="log_c">
                <table border="0" style="width:100%; font-size:1.4em;" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="40" class="log_c_img"><img src="catalog/view/theme/default/image/l_1.png"></td>
                    <td width="65" style="text-indent:8px;">账号：</td>
                    <td><input type="text" value="" name="email" placeholder="请输入账号" class="l_ipt"></td>
                    <td><input type="submit" value="<?php echo $button_continue; ?>" class="button" /></td>
                  </tr>
                </table>
            </div>
          </div>
  </form>       
  
  <?php echo $content_bottom; ?></div>
<?php echo $footer; ?>