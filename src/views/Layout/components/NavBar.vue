<template>
   <div>
      <div  style="float: left;line-height: 60px;font-size: 28px;color: #000;cursor: pointer">
          <i class="el-icon-menu" @click="toggleSideBar"></i>
          <span style="font-size: 26px;padding-left:20px;">SystemIframe</span>
      </div>
       <div style="text-align: right; font-size: 12px;float: right;color:#000;padding-right: 20px;">
           <el-dropdown>
               <i class="el-icon-more" style="margin-right: 15px;color:#409EFF;"></i>
               <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item>查看</el-dropdown-item>
                   <el-dropdown-item>新增</el-dropdown-item>
                   <el-dropdown-item>删除</el-dropdown-item>
               </el-dropdown-menu>
           </el-dropdown>
           <span>小坑</span>
       </div>
   </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
            }
        },
        components:{

        },
        computed: {

        },
        methods: {
            toggleSideBar() {
                this.$store.commit('toggleSideBar')
            },
        }
    }
</script>

<style scoped>

</style>
