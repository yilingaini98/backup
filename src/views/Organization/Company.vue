<template>
    <div>
       <div class="searchArea">
          <div class="searchGroup">
             <div>
                 <span class="searchContent">选择条件</span>
                 <el-select v-model="selectValue" placeholder="请选择" size="small">
                     <el-option
                             v-for="item in tableHeader"
                             :key="item.prop"
                             :label="item.label"
                             :value="item.prop">
                     </el-option>
                 </el-select>
             </div>
              <div>
                  <el-input v-model="searchContent" placeholder="请输入内容" size="small"></el-input>
              </div>
              <div>
                  <el-button type="primary" size="small" @click="search">查询</el-button>
              </div>
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
    </div>
</template>

<script>
    import alForm from '../../components/Form'
    import alDialogForm from '../../components/DialogForm'
    export default {
        name: "Company",
        components:{
            alForm,
            alDialogForm
        },
        data(){
            return{
                selectValue: '',
                searchContent: '',
                tableHeader:[{
                    prop:"C_FullName",
                    label:"公司名称",
                    type:"string",
                    value:"",
                    width:"150",
                },{
                    prop:"C_Nature",
                    label:"公司性质",
                    type:"string",
                    value:"",
                    width:"200",
                },{
                    prop:"C_FoundedDate",
                    label:"成立时间",
                    type:"date",
                    value:"",
                    width:"200",
                },{
                    prop:"C_Manager",
                    label:"负责人",
                    type:"string",
                    value:"",
                    width:"150",
                },{
                    prop:"C_BusinessScope",
                    label:"经营范围",
                    type:"string",
                    value:"",
                    width:"300",
                },{
                    prop:"C_Mark",
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