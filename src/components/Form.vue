<template>
    <div>
        <el-table
                :data="extenddata"
                :max-height="tableHeight"
                :height="tableHeight"
                style="width: 100%;"
                border
                size="small"
                :row-style="{height:'24px'}"
                highlight-current-row
                :row-class-name="tableRowClassName"
        >
            <el-table-column
                    v-for="item in extendheader"
                    :prop=item.prop
                    :label=item.label
                    :width=item.width
            >
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handlesizechange"
                @current-change="handlecurrentchange"
                :current-page="currentPage"
                :page-sizes="[30, 60, 90, 120]"
                :page-size="30"
                layout="total, sizes, prev, pager, next, jumper"
                :total="extendrecords">
        </el-pagination>
    </div>
</template>

<script>
    // 仅适用于无formatter的表格，如需formatter则直接将表格数据等写一张页面上比较好
    export default {
        name: "Form",
        props:['extendheader','extenddata','extendrecords','shrinkHeight'],
        data(){
            return{
                currentPage: 1,
                tableHeight:this.shrinkHeight? window.innerHeight-250-this.shrinkHeight:window.innerHeight-250,
            }
        },
        mounted(){

        },
        watch:{

        },
        computed:{
            formatterData(){

                this.formatterItem.includes('{{item.prop}}')
            }
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            handlesizechange(val) {
                this.$emit("handlesizechange", val);
                // console.log(`每页 ${val} 条`);
            },
            handlecurrentchange(val) {
                this.currentPage=val;
                this.$emit("handlecurrentchange", val);
                // console.log(`当前页: ${val}`);
            },
        },
    }
</script>

<style scoped>

</style>
