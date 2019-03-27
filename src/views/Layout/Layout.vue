<template>
    <el-container>
        <el-scrollbar style="height:100%">
            <el-aside width="200px;">
                <leftAside style="text-align: left;overflow-x: hidden;height:100%"></leftAside>
            </el-aside>
        </el-scrollbar>


        <el-container>
            <el-header style="border-bottom:1px solid #F7F7F7">
                <navBar></navBar>
            </el-header>

           <div style="height: 40px;">
               <el-tabs @tab-click="handleClick" style="padding:0 10px;">
                   <el-tab-pane label="用户管理" name="first" closable>用户管理</el-tab-pane>
                   <el-tab-pane label="配置管理" name="second" closable></el-tab-pane>
                   <el-tab-pane label="角色管理" name="third" closable></el-tab-pane>
                   <el-tab-pane label="定时任务补偿" name="fourth" closable></el-tab-pane>
               </el-tabs>
           </div>

            <el-scrollbar style="height:100%">
                <el-main>
                    <router-view />
                </el-main>
            </el-scrollbar>


        </el-container>
    </el-container>
</template>

<script>
    import leftAside from './components/Aside'
    import navBar from './components/NavBar'
    export default {
        name: "Layout",
        components:{
            leftAside,
            navBar
        },
        data(){
            return{

            }
        },
        watch: {
            '$route'(to, from) {
                // 对路由变化作出响应...
            }
        },
        methods:{
            handleClick(){

            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {background-color: #FFF;color: #333;text-align: center;line-height: 60px;padding:0 10px;}

    .el-aside {background-color: #D3DCE6;color: #333;text-align: center;line-height: 200px;height: 100%;}

    .el-main {background-color: #FFF;color: #333;text-align: center; }
    .el-tabs--top{height: 20px;line-height: 20px; padding-bottom: 30px;}
    .el-container{ height: 100%;}
</style>
