<?php echo $header; ?>
<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">
            <button class="button button-link button-nav pull-right">
            <span class="icon icon-emoji"></span>
            </button>
                <h1 class="title">添加宝宝</h1>
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
  <a class="tab-item external active" href="<?php echo $baby; ?>">
    <span class="icon icon-star"></span>
    <span class="tab-label">成长</span>
  </a>
  <a class="tab-item external" href="<?php echo $account; ?>">
    <span class="icon icon-cart"></span>
    <span class="tab-label">我的</span>
  </a>
</nav>
<div class="content">
<div class="list-block">
<form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" class="am-form">
	  <ul> 
        <li>
            <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">宝宝姓名</div>
                    <div class="item-input">
                    <input type="text" name="babyname" placeholder="请输入姓名" class="l_ipt">
                    </div>
                  </div>
                </div>
              </li>
            <li>
            <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">宝宝昵称</div>
                    <div class="item-input">
                    <input type="text" name="nickname" placeholder="请输入昵称" class="l_ipt">
                    </div>
                  </div>
                </div>
              </li>
            <li>
            <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">宝宝性别</div>
                    <div class="item-input">
                    <input type="radio" name="gender" value="male" class="l_ipt">男球
                    <input type="radio" name="gender" value="female" class="l_ipt">女球
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">宝宝生日</div>
                    <div class="item-input">
                    <input type="date" name="babybirthday" value="birthday" class="l_ipt">
                    </div>
                  </div>
                </div>
              </li>              
      </ul>
      <div class="content-block">
        <div class="row"><input type="submit" value="提交" class="button button-big button-fill button-success"></div>
      </div>

    </form>
</div>
</div>
</div>

<br><br><br><br><br><br><br><br><br><br><br><br>

<?php echo $footer; ?>


 