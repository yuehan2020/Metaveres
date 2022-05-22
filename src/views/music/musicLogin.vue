<template>
    <div class="loginBox">
        <div class="loginWay">
            <span>密码登录</span>
            <span>|</span>
            <span>短信登录</span>
        </div>
        <div class="formBox" v-if="LoginWayBox">
            <el-form :model="form" label-width="120px">
                <el-form-item label="账号">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" />
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
export default {
    name: 'musicLogin',
    data() {
        return {
            LoginWayBox: true,
            form: {
                name: '',
                password: ''
            }

        }
    },
    methods: {
        onSubmit() {
            console.log('登录');
        }
    },
}
</script>

<style lang="less" scoped>
.loginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginWay {
        height: 30px;
        line-height: 30px;
        color: #505050;
    }
}
</style>