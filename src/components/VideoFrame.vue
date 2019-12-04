<template>
  <div class="wrap_content">
    <div class="banner_area">
      <div class="demo-image__placeholder">
        <div class="block">
          <span class="demonstration">默认</span>
          <img src="../assets/imgs/banner_bg.jpg"/>
        </div>
      </div>

      <video width="100%" id="video" autoplay="" loop="" preload="" muted="" x-webkit-airplay="true" airplay="allow" webkit-playsinline="true" playsinline="true" src="http://tencent.com/video/index-video.mp4" class="video1 video"></video>
      <div class="banner_txt">
        <div class="txtbox">
          <p class="txt">上海常松网络科技有限公司</p>
        </div>
      </div>
      <div class="banner_txt1">
        <div class="txtbox">
          <p class="txt">连接科技共生未来</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/index.css";
@import "../assets/css/rem.css";
</style>
