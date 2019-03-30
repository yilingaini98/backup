<template>
    <div>
        部门部门
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