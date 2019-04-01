<template>
    <div class="loginBackground">
        <div class="loginArea">
            <h3>****   欢迎登录   ****</h3>
            <ul>
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
                    <span>验证码</span>
                    <span>换一组</span>
                </li>
            </ul>

            <div class="loginBtn">
                <el-button type="primary">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
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
</style>
