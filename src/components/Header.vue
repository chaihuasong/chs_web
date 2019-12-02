<template>
  <div class="wrap zh-cn">
    <!-- 页头区域 -->
    <div class="wrap_head">
      <!-- 点击搜索icon 添加类名 search_area_show 隐藏菜单，显示输入框 -->
      <!-- 添加类名 submenu_show 显示子菜单 -->

      <div class="head_con">
        <a class="logo" href="http://changsong.net.cn:88/"><h1>上海常松网络科技有限公司</h1></a>
        <ul class="menu_list" style="transform: translate(0px, 0px); opacity: 1;">
          <li class="menu_item" @mouseover="selectStyle" @mouseout="outStyle">
            <a class="txt" href="http://changsong.net.cn:88/">简介</a>
            <ul class="sub_list" style="display: none;" ref="sub_list" >
              <li><a href="http://changsong.net.cn:88/#about-con-1">公司简介</a></li>
              <li><a href="http://changsong.net.cn:88/#about-con-2">愿景及使命</a></li>
              <li><a href="http://changsong.net.cn:88/#about-con-3">发展历程</a></li>
              <li><a href="http://changsong.net.cn:88/#about-con-4">业务架构</a></li>
              <li><a href="http://changsong.net.cn:88/#about-con-5">管理团队</a></li>
              <li><a href="http://changsong.net.cn:88/#about-con-6">企业文化</a></li>
              <li><a href="http://changsong.net.cn:88/#about-con-7">办公地点</a></li>
            </ul>
            <span class="menu_hook" style="width: 104px;"></span></li>
          <li class="menu_item">
            <a class="txt" href="http://changsong.net.cn:88/">业务</a>
            <ul class="sub_list" style="display: none;">
              <li><a href="http://changsong.net.cn:88/">面向用户</a></li>
              <li><a href="http://changsong.net.cn:88/">面向企业</a></li>
              <li><a href="http://changsong.net.cn:88/">创新科技</a></li>
            </ul>
            <span class="menu_hook" style="width: 104px;"></span></li>
          <li class="menu_item">
            <a class="txt" href="https://tencent.com/zh-cn/employees.html">员工</a>
            <ul class="sub_list">
              <li><a href="https://tencent.com/zh-cn/employees.html#staff-con-1">人才发展</a></li>
              <li><a href="https://tencent.com/zh-cn/employees.html#staff-con-2">常松网络学院</a></li>
              <li><a href="https://tencent.com/zh-cn/employees.html#staff-con-3">工作环境</a></li>
              <li><a href="https://tencent.com/zh-cn/employees.html#staff-con-4">员工活动</a></li>
            </ul>
            <span class="menu_hook" style="width: 104px;"></span></li>
          <li class="menu_item">
            <a class="txt" href="https://tencent.com/zh-cn/responsibility.html">企业责任</a>
            <ul class="sub_list">
              <li><a href="https://tencent.com/zh-cn/responsibility.html#respon-con-1">践行承诺</a></li>
              <li><a href="https://tencent.com/zh-cn/responsibility.html#respon-con-2">支持善举</a></li>
              <li><a href="https://tencent.com/zh-cn/responsibility.html#respon-con-3">鼓励创新</a></li>
              <li><a href="https://tencent.com/zh-cn/responsibility.html#respon-con-4">企业社会责任报告</a></li>
            </ul>
            <span class="menu_hook" style="width: 136px;"></span></li>
          <li class="menu_item">
            <a class="txt" href="https://tencent.com/zh-cn/investors.html">投资者</a>
            <ul class="sub_list">
              <li><a href="https://tencent.com/zh-cn/investors.html#investors-con-1">财务新闻</a></li>
              <li><a href="https://tencent.com/zh-cn/investors.html#investors-con-2">公告及财务报告</a></li>
              <li><a href="https://tencent.com/zh-cn/investors.html#investors-con-3">业绩电话会及路演</a></li>
              <li><a href="https://tencent.com/zh-cn/investors.html#investors-con-4">投资者工具包</a></li>
              <li><a href="https://tencent.com/zh-cn/investors.html#investors-con-5">证券及债券信息</a></li>
              <li><a href="https://tencent.com/zh-cn/investors.html#investors-con-6">企业管治</a></li>
            </ul>
            <span class="menu_hook" style="width: 120px;"></span></li>
          <li class="menu_item">
            <a class="txt" href="https://tencent.com/zh-cn/media.html">媒体</a>
            <ul class="sub_list">
              <li><a href="https://tencent.com/zh-cn/media.html#media-con-1">企业动态</a></li>
              <li><a href="https://tencent.com/zh-cn/media.html#media-con-2">财务新闻</a></li>
              <li><a href="https://tencent.com/zh-cn/media.html#media-con-3">常松网络视角</a></li>
              <li><a href="https://tencent.com/zh-cn/media.html#media-con-4">媒体资料库</a></li>
            </ul>
            <span class="menu_hook" style="width: 104px;"></span></li>
          <li class="menu_item menu_item_lan"><a class="cn" lang="zh-cn">简体</a><i class="s_line s_line_1">|</i><a class="hk" lang="zh-hk">繁体</a><i class="s_line s_line_2" style="display: none;">|</i><a class="en" style="display: none;" lang="en-us">English</a><span class="menu_hook" style="width: 172px;"></span></li>

        </ul>
        <!--<div class="search_area">
          <a href="##" class="search_icon"></a>
          <input type="text" class="ipt_search" value="" placeholder="请输入您想搜索的关键字" />
        </div>-->
        <!--<div class="lang_area">
          <a class="lang_ch current" lang="zh-cn">简</a>
          <i class="s_line">|</i>
          <a class="lang_hk" lang="zh-hk">繁</a>
          <i class="s_line">|</i>
          <a class="lang_en" lang="en-us">EN</a>
        </div>-->
      </div>
      <div class="icon_menu">
        <a class="i_menu"></a>
        <a class="i_close"></a>
      </div>
      <div class="bg_hover"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    selectStyle () {
      //item.addClass("sublist_show");
      window.console.log("show"+this.$refs.sub_list.style.display);
      this.$refs.sub_list.style.background='#F00';
      window.console.log("show"+this.$refs.sub_list.style.display);
    },
    outStyle (item) {
      this.$set(item,'active',false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/base.css";
  @import "../assets/css/rem.css";
</style>
