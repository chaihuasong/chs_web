<template>
  <div class="wrap_content">
    <div class="descript_area">
      <p class="txt">上海常松网络科技有限公司是一家以互联网为基础的平台公司，<span class="pc"></span>通过技术丰富互联网用户的生活，<span class="m"></span>助力企业数字化升级。<span class="pc"></span>我们的使命是“用户为本 科技向善”。</p>
    </div>

    <div class="details_area">
      <div class="details_con">
        <ul class="detail_list">
          <li>
            <a href="http://changsong.net.cn:88/#about-con-1">
              <p>公司简介</p>
              <img src="../assets/imgs/index_detail_1.jpg" alt="公司简介">
            </a>
          </li>
          <li>
            <a href="http://changsong.net.cn:88/#about-con-6">
              <p>企业文化</p>
              <img src="../assets/imgs/index_detail_2.jpg" alt="企业文化">
            </a>
          </li>
          <li class="last">
            <a href="http://changsong.net.cn:88/#about-con-7">
              <p>办公地点</p>
              <img src="../assets/imgs/index_detail_3.jpg" alt="办公地点">
            </a>
          </li>
        </ul>
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
