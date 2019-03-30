<template>
    <div>
      <el-input
              style="padding-bottom:20px;"
              size="small"
              placeholder="输入关键字"
              v-model="filterText">
      </el-input>
      <el-tree
              :style="treeStyle"
              :data="extendtreedata"
              :default-expand-all="true"
              node-key="id"
              :filter-node-method="filterNode"
              :props="defaultProps"
              ref="tree"
              @node-click="handleNodeClick"
      >
      </el-tree>
    </div>
</template>

<script>
    export default {
        name: "DataDictionaryTree",
        props:["extendtreedata"],
        data(){
            return{
                treeStyle: {'max-height':window.innerHeight-220+ "px",'overflow-y':'scroll'},
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                filterText:''
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handleNodeClick(data) {
                this.$emit("currenttreeselect", data);
            },
        },
    }
</script>

<style scoped>

</style>
