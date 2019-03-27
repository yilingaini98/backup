<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%;"
                border
                size="small"
                highlight-current-row
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="date"
                    label="部门名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="部门编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="部门简称">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="负责人">
            </el-table-column>
            <el-table-column
                    prop="tel"
                    label="电话号">
            </el-table-column>
            <el-table-column
                    prop="ext"
                    label="分机号">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="备注">
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[30, 60, 90, 120]"
                :page-size="30"
                layout="total, sizes, prev, pager, next, jumper"
                :total="200">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data(){
            return{
                currentPage: 4,
                tableData: []
            }
        },
        mounted(){
            this.getData();
        },
        methods: {
            getData(){
                this.axios.get('/api/data')
                    .then(res => {
                        console.log(res);
                        this.tableData=res.data.data
                    });
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style scoped>

</style>