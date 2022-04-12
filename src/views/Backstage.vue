<template>
    <div>
      <h2>正在转移当中</h2>
      <el-button @click="loginOut">退出</el-button>
    </div>
</template>

<script>
export default {
  name: 'Backstage',
  methods: {
    // 退出功能
    loginOut () {
      console.log('退出了')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
h2{
  text-align: center;
}
</style>
