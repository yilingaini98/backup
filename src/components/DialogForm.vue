<template>
    <el-dialog
            :title="dialogtitle"
            :visible.sync="dialogisvisible"
            width="50%"
            :before-close="handleClose">
        <span>
            <alDialogFormContent  :dialogformcontent="fullFields"></alDialogFormContent>
        </span>
        <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="medium">取 消</el-button>
        <el-button type="primary" @click="handleConfirm"  size="medium">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import alDialogFormContent from './DialogFormContent';
    export default {
        name: "dialogForm",
        components:{
            alDialogFormContent
        },
        props:['dialogisvisible','dialogtitle','dialogcontent'],
        data(){
            return{
                dialogVisible:false,
                fullFields:this.dialogcontent//向父组件获取表头数据
            }
        },
        mounted(){

        },
        methods:{
            handleClose() {
                console.log("我关啦");
                this.$emit("handleclosedialog", this.dialogVisible);
            },
            handleConfirm(){
                console.log("确认啦")
                this.$emit("handleclosedialog", this.dialogVisible);
            }
        }
    }
</script>

<style scoped>

</style>
