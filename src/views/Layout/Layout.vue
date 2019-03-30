<template>
    <el-container>
        <el-scrollbar style="height:100%">
            <el-aside width="200px;">
                <alAside
                        style="text-align: left;overflow-x: hidden;height:100%"
                        @handlecurrentpath="currentPath"
                ></alAside>
            </el-aside>
        </el-scrollbar>


        <el-container>
            <el-header style="border-bottom:1px solid #F7F7F7">
                <alNavBar></alNavBar>
            </el-header>


            <el-tabs
                    v-model="editableTabsValue"
                    @tab-click="handleClick"
                    closable
                    @tab-remove="removeTab">
                <el-tab-pane
                        v-for="(item, index) in resCurrentPath"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                >
                </el-tab-pane>
            </el-tabs>


            <el-scrollbar style="height:100%">
                <el-main>
                    <router-view />
                </el-main>
            </el-scrollbar>


        </el-container>
    </el-container>
</template>

<script>
    import alAside from './components/Aside'
    import alNavBar from './components/NavBar'
    export default {
        name: "Layout",
        components:{
            alAside,
            alNavBar,
        },
        data(){
            return{
                resCurrentPath:[],
                editableTabsValue:"",
            }
        },
        computed: {

        },
        methods:{
            currentPath(path) {
                let that=this;
                that.$store.commit("getTabData",path);
                this.resCurrentPath=this.$store.state.getTabData.resData;
            },
            handleClick(tab, event) {
                let that=this;
                that.$router.push(tab.name);
            },
            removeTab(targetName){
                let tabs = this.resCurrentPath;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                this.editableTabsValue = activeName;
                this.resCurrentPath = tabs.filter(tab => tab.name !== targetName);
                let namesData=[];
                this.resCurrentPath.forEach(function(value, index, array) {
                    namesData.push(value.name);
                });
                this.$store.commit("getTabData",this.resCurrentPath);
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
