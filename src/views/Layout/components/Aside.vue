<template>
   <div>
       <el-menu class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                background-color="#263445"
                text-color="#fff"
                :router="true"
       >
           <el-submenu index="1">
               <template slot="title">
                   <i class="el-icon-location"></i>
                   <span slot="title">组织架构</span>
               </template>
               <el-menu-item-group>
                  <el-menu-item index="/Company">公司管理</el-menu-item>
                  <el-menu-item index="/Department">部门管理</el-menu-item>
                  <el-menu-item index="/Personnel">人员管理</el-menu-item>
                  <el-menu-item index="/RoleManager">角色管理</el-menu-item>
               </el-menu-item-group>
           </el-submenu>
           <el-submenu index="2">
               <template slot="title">
                   <i class="el-icon-setting"></i>
                   <span slot="title">系统设置</span>
               </template>
               <el-menu-item-group>
                   <el-menu-item index="/Company">数据字典</el-menu-item>
               </el-menu-item-group>
           </el-submenu>
       </el-menu>
   </div>
</template>

<script>
    export default {
        name: "leftAside",
        data() {
            return {
                isCollapse:false,
            };
        },
        computed: {
            toggleSideBar() {
                return  this.$store.state.toggleSideBar.toggleSideBar;
            }
        },//先在计算属性中取store值，再watch监听
        watch:{
            toggleSideBar:{
                handler(newVal,oldVal){
                    if(newVal!=oldVal){
                        this.isCollapse=newVal;
                    }
                 }
            },
            deep: true,
            immediate: true
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>