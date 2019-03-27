<template>
    <div>
       <div class="searchArea">
          <div class="searchGroup">
             <div>
                 <span class="searchContent">选择条件</span>
                 <el-select v-model="value" placeholder="请选择" size="small">
                     <el-option
                             v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                     </el-option>
                 </el-select>
             </div>
              <div>
                  <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
              </div>
              <div>
                  <el-button type="primary" size="small">查询</el-button>
              </div>
          </div>

           <div class="btnGroup">
               <el-button-group>
                   <el-button icon="el-icon-edit" size="small"></el-button>
                   <el-button icon="el-icon-edit-outline" size="small"></el-button>
                   <el-button icon="el-icon-delete" size="small"></el-button>
               </el-button-group>
           </div>
       </div>


        <alForm></alForm>

    </div>
</template>

<script>
    import alForm from '../../components/Form'
    export default {
        name: "Company",
        components:{
            alForm
        },
        data(){
            return{
                input: '',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
            }
        },
    }
</script>

<style scoped>

</style>