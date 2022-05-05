<template>
  <div>
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <span>{{title}}</span>
                <el-button class="button" type="text">
                  <router-link :to="ToGo">点击进入</router-link>
                </el-button>
              </div>
            </template>
            <img
              :src="banner"
              class="image"
            />
          </el-card>
  </div>
</template>

<script>
export default {
  name: 'Car',
  props: [
    'title',
    'banner',
    'ToGo'
  ],
  mounted () {
    console.log(this.ToGo)
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #909399;
}
a:hover {
  color: #409eff;
}
// 卡片
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  width: 100%;
}
.image {
  width: 30vw;
  display: block;
}
</style>
