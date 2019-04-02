<template>
    <div class="loginBackground">
        <div class="loginArea">
            <h3>****   欢迎登录   ****</h3>
            <ul :rules="ruleInline">
                <li>
                    <el-input
                            placeholder="请输入用户名"
                            prefix-icon="el-icon-tickets"
                    >
                    </el-input>
                </li>
                <li>
                    <el-input
                            placeholder="请输入密码"
                            show-password
                            prefix-icon="el-icon-tickets"
                    >
                    </el-input>
                </li>
                <li>
                    <el-input
                            placeholder="验证码"
                            prefix-icon="el-icon-tickets"
                    >
                    </el-input>
                    <span>
                         <div class="code" style="margin-left:12px;">
                            <SIdentify :identifyCode="identifyCode"></SIdentify>
                        </div>
                    </span>
                    <span @click="refreshCode" style="cursor: pointer">换一组</span>
                </li>
            </ul>

            <div class="loginBtn">
                <el-button type="primary" @click="userLogin">登录</el-button>
            </div>
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
                formInlinePassword: {
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
        padding:0 4rem;
    }
    .loginArea h3{
        font-size: 24px;
        color:#FFF;
        padding: 1rem 0;
    }
    .loginArea ul{
        padding-left: 0;
    }
    .loginArea li{
        height: 36px;
        width:100%;
        line-height: 36px;
        color:#FFF;
        display: flex;
        padding:0.5rem 0;
    }
.loginArea li>span{
    width:10rem;
    height: 36px;
    line-height: 36px;
}

    .loginBtn{
        padding-top:20px;
    }
.el-button--primary{
    width:100%
}

.code {
    width: 80px;
    height: 100%;
    border: 1px solid #cccccc;
}
</style>
