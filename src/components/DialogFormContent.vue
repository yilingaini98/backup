<template>
    <el-form ref="form"
             label-width="80px"
    >
        <el-form-item :label=item.label
                      v-for="item in dialogformcontent"
        >
            <el-input  v-if="item.type=='string'"
                       type="input"
                       size="medium"
                       v-model=item.value
            ></el-input>
            <el-date-picker v-else-if="item.type=='date'"
                            type="date"
                            size="medium"
                            placeholder="选择日期"
                            v-model=item.value
                            style="width: 100%;"
            ></el-date-picker>
            <el-input v-else-if="item.type=='textarea'"
                      type="textarea"
                      size="medium"
                      v-model=item.value
            ></el-input>
            <el-switch v-else-if="item.type=='switch'"
                      size="medium"
                      v-model=item.value
                       style="text-align:left"
            ></el-switch>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "DialogFormContent",
        props:['dialogformcontent'],
        data(){
            return{

            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
