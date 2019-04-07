<template>
    <div class="loginBackground">
        <div class="loginArea">
            <h3>****   欢迎登录   ****</h3>
            <el-form :model="formInline" :rules="ruleInline" ref="formInline">
                <el-form-item prop="userName">
                    <el-input
                            placeholder="请输入用户名"
                            prefix-icon="el-icon-tickets"
                            v-model="formInline.userName"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            placeholder="请输入密码"
                            show-password
                            prefix-icon="el-icon-tickets"
                            v-model="formInline.password"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="YZM">
                   <el-row>
                       <el-col :span="10">
                           <el-input
                                   placeholder="验证码"
                                   prefix-icon="el-icon-tickets"
                                   v-model="formInline.YZM"
                           >
                           </el-input>
                       </el-col>
                       <el-col :span="8">
                           <div class="code" style="margin-left:12px;">
                               <SIdentify :identifyCode="identifyCode"></SIdentify>
                           </div>
                       </el-col>
                       <el-col :span="6">
                           <div @click="refreshCode" style="cursor: pointer;text-align: center;color:#4091FF">换一组</div>
                       </el-col>
                   </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" long @click="userLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(e){
            let validateUserName=function(rule, value, callback){
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            let validatePass = function(rule, value, callback) {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            let validateIdentifyCode=function(rule,value,callback){
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else if(value!=e.identifyCode){
                    callback(new Error('验证码输入错误'));
                }else{
                    callback();
                }
            };
            return{
                formInline: {
                    userName:'',
                    password:'',
                    YZM:''
                },
                ruleInline: {
                    userName:[
                        { validator:validateUserName,required: true, trigger: 'blur' },
                    ],
                    password: [
                        { validator:validatePass,required: true, trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能小于6个字符', trigger: 'blur' }
                    ],
                    YZM:[
                        { validator:validateIdentifyCode,required: true,  trigger: 'blur' }
                    ],
                },
                identifyCodes: "1234567890",//图形验证码范围
                identifyCode: "",//图形验证码
            }
        },
        mounted(){
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        methods:{
            //图形验证码
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                        this.randomNum(0, this.identifyCodes.length)
                        ];
                }
            },
            userLogin(){
                this.$router.push("/Layout")
            }
        }
    }
</script>

<style scoped>
.loginBackground{
    width: 100%;
    height: 100%;
    background:url('~@/assets/image/loginBG.jpg') no-repeat;
    background-size: cover;
    position: relative;
}

    .loginArea{
        position: absolute;
        top:30%;
        right: 10%;
        height:400px;
        width:250px;
        background: rgba(26,43,78,0.5);
        padding:0 3rem;
    }
    .loginArea h3{
        font-size: 24px;
        color:#FFF;
        padding: 1rem 0;
    }

.el-form-item{
    margin-bottom: 22px;
}

.el-row{
    line-height: 28px;
}

.el-button--primary{
    width:100%
}


</style>
