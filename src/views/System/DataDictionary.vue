<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="3">
                <el-tree
                        :data="data2"
                        show-checkbox
                        :default-expand-all="true"
                        node-key="id"
                        :props="defaultProps">
                </el-tree>
            </el-col>
            <el-col :span="21" style="border-left:1px solid #CCC">
                <div class="searchArea">
                    <div class="searchGroup">
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
                    </div>

                    <div class="btnGroup">
                        <el-button-group>
                            <el-button icon="el-icon-edit" size="small" @click="newDialogForm"></el-button>
                            <el-button icon="el-icon-edit-outline" size="small" @click="editDialogForm"></el-button>
                            <el-button icon="el-icon-delete" size="small"></el-button>
                        </el-button-group>
                    </div>
                </div>

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
            </el-col>
        </el-row>



    </div>
</template>

<script>
    import alForm from '../../components/Form'
    import alDialogForm from '../../components/DialogForm'
    export default {
        name: "DataDictionary",
        components:{
            alForm,
            alDialogForm
        },
        data(){
            return{
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                selectValue: '',
                searchContent: '',
                tableHeader:[{
                    prop:"ItemName",
                    label:"项目值",
                    type:"string",
                    value:"",
                    width:"150",
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
                    width:"150",
                },{
                    prop:"EnabledMark",
                    label:"启用",
                    type:"switch",
                    value:"",
                    width:"200",
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
                    pagePath:"DataDictionary"
                };
                this.$store.commit("getData",param);
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
            }
        },
    }
</script>

<style scoped>

</style>
