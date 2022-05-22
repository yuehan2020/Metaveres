<template>
    <div class="loginBox">
        <div class="loginWay d-flex">
            <span>密码登录</span>
            <span>|</span>
            <span>短信登录</span>
        </div>
        <div class="formBox" v-if="LoginWayBox">
            <el-form :model="form" label-width="120px">
                <el-form-item label="手机号">
                    <el-input v-model="form.phone" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"  show-password/>
                </el-form-item>

                <el-form-item>
                    <el-button>注册</el-button>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
            
        </div>
    </div>
</template>

<script>
import url from '@/api/url.js'
import {postRequest} from'@/api/api.js'
export default {
    name: 'musicLogin',
    data() {
        return {
            LoginWayBox: true,
            form: {
                phone: '',
                password: ''
            }

        }
    },
    methods: {
        async onSubmit() {
            if (!this.form.phone) {
                this.msgFn('warning','请输入账号')
                return
            }else if(!this.form.password){
                this.msgFn('warning','请输入密码')
                return

            }else {
                console.log('请求登录');
                let data = this.form
                let res = await postRequest(url.login,data)
                if(res.code=='200'){
                  this.msgFn('success','登录成功')
                    localStorage.setItem('userInfo',JSON.stringify(res.profile))
                    localStorage.setItem('token',res.token)
                    localStorage.setItem('cookie',res.cookie)
                setTimeout(() => {
                    this.$router.push('/music')
                }, 1000);
                }else {
                  this.msgFn('error',res.msg)
                  return
                }
                
            }

        },
        // 弹窗
        msgFn(type, text) {
            this.$message({
                message: text,
                type
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.loginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginWay {
        height: 30px;
        // line-height: 30px;
        color: #505050;
        span {
            flex: 1;
        }
    }
}
.test {
    color: $colorRed;
}
</style>