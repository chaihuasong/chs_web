<template>
    <div>
        <el-menu>
            <el-submenu index="1">
                <template slot="title">
                    <span>简介</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">公司简介</el-menu-item>
                    <el-menu-item index="1-2">愿景及使命</el-menu-item>
                    <el-menu-item index="1-3">发展历程</el-menu-item>
                    <el-menu-item index="1-4">业务架构</el-menu-item>
                    <el-menu-item index="1-5">管理团队</el-menu-item>
                    <el-menu-item index="1-6">企业文化</el-menu-item>
                    <el-menu-item index="1-7">办公地点</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <span>业务</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">面向用户</el-menu-item>
                    <el-menu-item index="2-2">面向企业</el-menu-item>
                    <el-menu-item index="2-3">创新科技</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <span>员工</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">人才发展</el-menu-item>
                    <el-menu-item index="3-2">常松网络学院</el-menu-item>
                    <el-menu-item index="3-3">工作环境</el-menu-item>
                    <el-menu-item index="3-4">员工活动</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <span>企业责任</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">践行承诺</el-menu-item>
                    <el-menu-item index="4-2">支持善举</el-menu-item>
                    <el-menu-item index="4-3">鼓励创新</el-menu-item>
                    <el-menu-item index="4-4">企业社会责任报告</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <span>投资者</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="5-1">财务新闻</el-menu-item>
                    <el-menu-item index="5-2">公告及财务报告</el-menu-item>
                    <el-menu-item index="5-3">业绩电话会及路演</el-menu-item>
                    <el-menu-item index="5-4">投资者工具包</el-menu-item>
                    <el-menu-item index="5-4">证券及债券信息</el-menu-item>
                    <el-menu-item index="5-4">企业管治</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <span>媒体</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="6-1">企业动态</el-menu-item>
                    <el-menu-item index="6-2">财务新闻</el-menu-item>
                    <el-menu-item index="6-3">常松网络视角</el-menu-item>
                    <el-menu-item index="6-4">媒体资料库</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/dropdown.css";
</style>
