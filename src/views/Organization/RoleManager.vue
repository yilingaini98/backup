<template>
    <div style="padding:0 20px;">
        <el-row :gutter="20" justify="space-between" type="flex">
            <el-col :span="14"  style="text-align: left">
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
            <el-col :span="10"  style="text-align: right;padding-top: 5px;">
                <el-button-group>
                    <el-button icon="el-icon-edit" size="small" @click="newDialogForm"></el-button>
                    <el-button icon="el-icon-edit-outline" size="small" @click="editDialogForm"></el-button>
                    <el-button icon="el-icon-delete" size="small"></el-button>
                </el-button-group>
                <el-button type="success" icon="el-icon-info" size="small" style="margin-left:10px;" @click="userTransfer">成员配置</el-button>
                <el-button type="danger" icon="el-icon-star-on" size="small" style="margin-left:10px;" @click="roleDialogForm">权限配置</el-button>
            </el-col>
        </el-row>


        <alForm :extendheader="tableHeader"
                :extenddata="tableData"
                :extendrecords="totalPage"
                @handlecurrentchange="getcurrentPage"
                @handlesizechange="getpageSize"
        ></alForm>

        <alDialogForm
                :dialogisvisible="dialogVisible"
                :dialogtitle="dialogTitle"
                :dialogcontent="dialogContent"
                @handleclosedialog="changeDialogStatus"
        ></alDialogForm>


    </div>
</template>

<script>
    import alForm from '../../components/Form'
    import alDialogForm from '../../components/DialogForm'
    export default {
        name: "RoleManager",
        components:{
            alForm,
            alDialogForm
        },
        data(){
            return{
                selectValue: '',
                searchContent: '',
                tableHeader:[{
                    prop:"R_EnCode",
                    label:"角色编号",
                    type:"string",
                    value:"",
                    width:"100",
                },{
                    prop:"R_FullName",
                    label:"角色名称",
                    type:"string",
                    value:"",
                    width:"150",
                },{
                    prop:"R_CreateDate",
                    label:"创建时间",
                    type:"date",
                    value:"",
                    width:"150",
                },{
                    prop:"R_CreateUserName",
                    label:"创建人",
                    type:"string",
                    value:"",
                    width:"150",
                },{
                    prop:"R_EnabledMark",
                    label:"有效",
                    type:"switch",
                    value:"",
                    width:"100",
                },{
                    prop:"R_Description",
                    label:"角色描述",
                    type:"textarea",
                    value:"",
                    width:"200",
                }],
                pageSize:"30",//每页的数据条数
                currentPage:"1",//默认开始页
                dialogVisible: false,
                dialogTitle:'',//弹层标题
            }
        },
        computed: {
            tableData (){
                let resData = this.$store.state.getFormData.resData;
                return resData;
            },
            totalPage(){
                let records = this.$store.state.getFormData.records;
                return records;
            },
            dialogContent(){
                let content = this.tableHeader;
                return content;
            },
        },
        mounted(){
            this.search();
        },
        methods: {
            search(){
                let param={
                    selected:this.selectValue,
                    content:this.searchContent,
                    pageSize:this.pageSize,
                    currentPage:this.currentPage,
                    pagePath:"RoleManager"
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
            roleDialogForm(){

            },
            userTransfer(){

            },
        },
    }
</script>

<style scoped>

</style>
