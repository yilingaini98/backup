<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4" :lg="3" :md="5">
                <alDataDictionaryTree
                        :extendtreedata="treeData"
                        @currenttreeselect="treeSelect"
                >
                </alDataDictionaryTree>
            </el-col>

            <el-col :span="20" :lg="21" :md="19" style="border-left:1px solid #CCC;padding:0 30px;">

                <el-card class="box-card" shadow="never">
                    <div slot="header">
                        <span>{{layoutHeader}}{{treeSelectName}}</span>
                    </div>
                    <div>
                        <el-row :gutter="20" justify="space-between" type="flex">
                            <el-col :span="18"  style="text-align: left">
                                <el-form :inline="true"  class="demo-form-inline">
                                    <el-form-item  label="选择条件">
                                        <el-select v-model="selectValue" placeholder="请选择" size="small">
                                            <el-option
                                                    v-for="item in tableHeader"
                                                    :key="item.prop"
                                                    :label="item.label"
                                                    :value="item.prop"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-input v-model="searchContent" placeholder="请输入内容" size="small"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="search" size="small">查询</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-col>

                            <el-col :span="6"  style="text-align: right;padding-top: 5px;">
                                <el-button-group>
                                    <el-button icon="el-icon-edit" size="small" @click="newDialogForm"></el-button>
                                    <el-button icon="el-icon-edit-outline" size="small" @click="editDialogForm"></el-button>
                                    <el-button icon="el-icon-delete" size="small"></el-button>
                                </el-button-group>
                            </el-col>
                        </el-row>

                        <alForm :extendheader="tableHeader"
                                :layoutheader="layoutHeader"
                                :extenddata="tableData"
                                :extendrecords="totalPage"
                                :shrinkHeight="60"
                                @handlecurrentchange="getcurrentPage"
                                @handlesizechange="getpageSize"
                        ></alForm>


                    </div>
                </el-card>

                <alDialogForm
                        :dialogisvisible="dialogVisible"
                        :dialogtitle="dialogTitle"
                        :dialogcontent="dialogContent"
                        @handleclosedialog="changeDialogStatus"
                ></alDialogForm>
            </el-col>
        </el-row>



    </div>
</template>

<script>
    import alForm from '../../components/Form'
    import alDialogForm from '../../components/DialogForm'
    import alDataDictionaryTree from '../../components/Tree'
    export default {
        name: "DataDictionary",
        components:{
            alForm,
            alDialogForm,
            alDataDictionaryTree
        },
        data(){
            return{
                selectValue: '',
                searchContent: '',
                layoutHeader:'未选择',
                tableHeader:[{
                    prop:"ItemName",
                    label:"项目值",
                    type:"string",
                    value:"",
                    width:"150",
                    formatter:"dictionary"
                },{
                    prop:"ItemValue",
                    label:"项目名",
                    type:"string",
                    value:"",
                    width:"150",
                },{
                    prop:"Simplicity",
                    label:"简拼",
                    type:"string",
                    value:"",
                    width:"150",
                },{
                    prop:"Sortable",
                    label:"排序",
                    type:"string",
                    value:"",
                    width:"100",
                },{
                    prop:"EnabledMark",
                    label:"启用",
                    type:"switch",
                    value:"",
                    width:"100",
                },{
                    prop:"Mark",
                    label:"备注",
                    type:"textarea",
                    value:"",
                    width:"150",
                }],
                pageSize:"30",//每页的数据条数
                currentPage:"1",//默认开始页
                dialogVisible: false,
                dialogTitle:'',//弹层标题
                treeSelectName:'',//树选中项字段名
            }
        },
        computed: {
            tableData(){
                if(this.treeSelectName){
                    let resData = this.$store.state.getFormData.resData;
                    return resData;
                }else{
                    return [];
                }
            },
            totalPage(){
                let records = this.$store.state.getFormData.records;
                return records;
            },
            dialogContent(){
                let content = this.tableHeader;
                return content;
            },
            treeData(){
                let resData = this.$store.state.getTreeData.resData;
                return resData;
            },
        },
        mounted(){
            this.treeInit();
        },
        methods: {
            treeInit(){
                this.$store.commit("getTreeData");
            },
            search(){
                let param={
                    selected:this.selectValue,
                    content:this.searchContent,
                    pageSize:this.pageSize,
                    currentPage:this.currentPage,
                    pagePath:"DataDictionary",
                    id:this.treeSelectName
                };
                this.$store.commit("getFormData",param);
            },
            getcurrentPage(currPage){
                this.currentPage=currPage;
                this.search();
            },
            getpageSize(pageSize){
                this.pageSize=pageSize;
                this.search();
            },
            newDialogForm(){
                this.changeDialogStatus();
                this.dialogTitle="新增";
            },
            editDialogForm(){
                this.changeDialogStatus();
                this.dialogTitle="编辑";
            },
            changeDialogStatus(){
                this.dialogVisible=!this.dialogVisible;
            },
            treeSelect(data){
                this.layoutHeader=data.label;
                this.treeSelectName=data.name;
                this.search();
            }
        },
    }
</script>

<style scoped>

</style>
