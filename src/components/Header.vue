<template>
    <div class="wrap zh-cn">
        <!-- 页头区域 -->
        <div class="wrap_head">
            <!-- 点击搜索icon 添加类名 search_area_show 隐藏菜单，显示输入框 -->
            <!-- 添加类名 submenu_show 显示子菜单 -->

            <div class="head_con">
                <a class="logo" href="http://changsong.net.cn:88/"><h1>上海常松网络科技有限公司</h1></a>
                <el-dropdown class="el-dropdown">
                    <span class="el-dropdown-link">简介</span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://changsong.net.cn:88/#about-con-1">
                            <el-dropdown-item class="el-dropdown-item">公司简介</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-2">
                            <el-dropdown-item class="el-dropdown-item">愿景及使命</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-3">
                            <el-dropdown-item class="el-dropdown-item">发展历程</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-4">
                            <el-dropdown-item class="el-dropdown-item">业务架构</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-5">
                            <el-dropdown-item class="el-dropdown-item">管理团队</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-6">
                            <el-dropdown-item class="el-dropdown-item">企业文化</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-7">
                            <el-dropdown-item class="el-dropdown-item">办公地点</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">业务</span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://changsong.net.cn:88/#about-con-1">
                            <el-dropdown-item class="el-dropdown-item">面向用户</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-2">
                            <el-dropdown-item class="el-dropdown-item">面向企业</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-3">
                            <el-dropdown-item class="el-dropdown-item">创新科技</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">员工</span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://changsong.net.cn:88/#about-con-1">
                            <el-dropdown-item class="el-dropdown-item">人才发展</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-2">
                            <el-dropdown-item class="el-dropdown-item">常松网络学院</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-3">
                            <el-dropdown-item class="el-dropdown-item">工作环境</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-4">
                            <el-dropdown-item class="el-dropdown-item">员工活动</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">企业责任</span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://changsong.net.cn:88/#about-con-1">
                            <el-dropdown-item class="el-dropdown-item">践行承诺</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-2">
                            <el-dropdown-item class="el-dropdown-item">支持善举</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-3">
                            <el-dropdown-item class="el-dropdown-item">鼓励创新</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-4">
                            <el-dropdown-item class="el-dropdown-item">企业社会责任报告</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">投资者</span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://changsong.net.cn:88/#about-con-1">
                            <el-dropdown-item class="el-dropdown-item">财务新闻</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-2">
                            <el-dropdown-item class="el-dropdown-item">公告及财务报告
                            </el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-3">
                            <el-dropdown-item class="el-dropdown-item">业绩电话会及路演
                            </el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-4">
                            <el-dropdown-item class="el-dropdown-item">投资者工具包</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-5">
                            <el-dropdown-item class="el-dropdown-item">证券及债券信息</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-7">
                            <el-dropdown-item class="el-dropdown-item">企业管治</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdown-link">媒体</span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="http://changsong.net.cn:88/#about-con-1">
                            <el-dropdown-item class="el-dropdown-item">企业动态</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-2">
                            <el-dropdown-item class="el-dropdown-item">财务新闻</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-3">
                            <el-dropdown-item class="el-dropdown-item">常松网络视角</el-dropdown-item>
                        </a>
                        <a href="http://changsong.net.cn:88/#about-con-4">
                            <el-dropdown-item class="el-dropdown-item">媒体资料库</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/base.css";
    @import "../assets/css/rem.css";

    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        margin-right: 50px;
    }

    .el-dropdown-item {
        color: #666;
        font-size: 16px;
    }

    .el-dropdown {
        top: 25px;
        left: 280px;
    }
</style>
