<template>
    <div>
        <div class="head_con">
            <img class="menu_icon" src="../assets/imgs/icon_menu.png" @click="drawer = true" type="primary" />
            <a class="logo" href="http://changsong.net.cn:88/"><h1>上海常松网络科技有限公司</h1></a>
            <TopMenu/>
        </div>
        <el-drawer class="left_menu"
                   title=""
                   :visible.sync="drawer"
                   :direction="direction"
                   :modal="false"
                   :modal-append-to-body="false"
                   size="40%">
            <LeftMenu/>
        </el-drawer>
    </div>
</template>

<script>
    import TopMenu from './TopMenu';
    import LeftMenu from './LeftMenu';
    export default {
        name: 'Header',
        props: {
            msg: String
        },
        data() {
            return {
                drawer: false,
                direction: 'ltr',
            };
        },
        methods: {},
        components: {
            TopMenu,
            LeftMenu
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/base.css";
    @import "../assets/css/rem.css";
    @import "../assets/css/dropdown.css";
</style>
