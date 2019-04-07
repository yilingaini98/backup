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
                <el-button type="danger" icon="el-icon-star-on" size="small" style="margin-left:10px;" @click="roleDialogVisible = true">权限配置</el-button>
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



        <el-dialog title="权限配置" :visible.sync="roleDialogVisible">
            <el-steps :active="currentStep" simple>
                <el-step title="功能模块" icon="el-icon-edit"></el-step>
                <el-step title="按钮显示" icon="el-icon-upload"></el-step>
                <el-step title="完成" icon="el-icon-picture"></el-step>
            </el-steps>

            <div style="padding:20px;text-align: left" v-if="currentStep==1">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedNavs" @change="handleCheckedNavsChange">
                    <el-checkbox border
                                 v-for="nav in navs"
                                 :label="nav.path"
                                 :key="nav.path">{{nav.name}}</el-checkbox>
                </el-checkbox-group>
            </div>
            <div v-else-if="currentStep==2">
                <div style="margin: 15px 0;">
                    <el-table
                            :data="btnRoleTable"
                            stripe
                            style="width: 100%">
                        <el-table-column
                                prop="nav"
                                label="功能模块"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="btn"
                                label="按钮权限"
                                width="300">
                            <template slot-scope="scope">
                                <el-tag v-for="item in scope.row.btn"
                                        :type="item === 'delete' ? 'primary' : 'success'"
                                        @click="handleTagClick(item)">{{item}}</el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div v-else-if="currentStep==3">
                <div>老三</div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="nextStep(currentStep)">{{submitTxt}}</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    const navOptions = [
        {
            path:'Company',
            name:'公司管理'
        },
        {
            path:'Department',
            name:'部门管理'
        },
        {
            path:'Personnel',
            name:'人员管理'
        },
        {
            path:'RoleManager',
            name:'角色管理'
        },
        {
            path:'DataDictionary',
            name:'数据字典'
        }];//菜单列表
    const btnOptions=[
        {
            value: '1',
            label: '新增'
        }, {
            value: '2',
            label: '编辑'
        }, {
            value: '3',
            label: '删除'
        }];//按钮列表
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
                tableHeader:[
                    {
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
                roleDialogVisible:false,
                roleDialogForm:'',
                checkAll: true,
                checkedNavs: [],
                navs: navOptions,
                isIndeterminate: true,
                currentStep:1,
                submitTxt:'下一步',
                btns:btnOptions,
                checkedBtn:[],
                btnRoleTable: [{
                    nav: 'Company',
                    btn: ['add','edit','delete'],
                }, {
                    nav: 'Department',
                    btn: ['add','edit','delete'],
                }, {
                    nav: 'Personnel',
                    btn: ['add','edit','delete'],
                }, {
                    nav: 'RoleManager',
                    btn: ['add','edit','delete'],
                }]
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
            handleCheckAllChange(val) {
                let _optionPath=[];
                navOptions.forEach((item,index)=>{
                    _optionPath.push(item.path);
                });
                this.checkedNavs = val ? _optionPath : [];
                this.isIndeterminate = false;
            },
            handleCheckedNavsChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.navs.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.navs.length;
            },
            nextStep(currentStep){
                this.currentStep=currentStep+1;
                if( currentStep==2){
                    this.submitTxt='完成';
                }else if( currentStep==3){
                    this.roleDialogVisible=false;
                    this.submitTxt='下一步';
                    this.currentStep=1;
                }
            },
            userTransfer(){

            },
            handleTagClick(tag){
                console.log(tag)
            }
        },
    }
</script>

<style scoped>
    .el-checkbox.is-bordered
    {
        margin:10px;
    }
    .el-input__inner{
        width:230px;
    }
    .el-tag{
        margin:0 5px;
    }
</style>
