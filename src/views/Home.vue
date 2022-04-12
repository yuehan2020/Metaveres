<template>
  <div class="home">
    <el-container>
      <el-header>

        <!-- 导航菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>更多</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-header>

      <!-- 主体区域 -->
      <el-main>

        <el-space :size="large" wrap>
            <!-- 音乐卡 -->
            <Car title="小涵音乐" banner="https://z3.ax1x.com/2021/11/16/IfDVvd.png" ToGo="/music" ></Car>
            <!-- 电商后台管理系统 -->
            <Car title="小涵商城后台管理" banner="https://z3.ax1x.com/2021/11/16/IfKdN6.png" ToGo="/backstage" ></Car>
            <!-- 商城卡 -->
            <Car title="小涵商城后台管理" banner="https://z3.ax1x.com/2021/11/16/IfT21s.png" ToGo="/shop" ></Car>
            <Car title="小涵代码练习" banner="https://img2.baidu.com/it/u=4156000803,3648738866&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" ToGo="/codep" ></Car>
        </el-space>
      </el-main>

      <!-- 底部区域 -->
      <el-footer>
        <div style="width:300px;margin:0 auto; padding:20px 0;">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001329"
                style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img
                    src="../assets/备案图标.png" style="float:left;" />
                <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">鄂公网安备
                    42011502001329号</p>
            </a>
            <a target="_blank" href="https://beian.miit.gov.cn/" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">鄂ICP备2021009303号-1</p> </a>
        </div>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
// import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
import { ref } from 'vue'
import Car from '../components/Car.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Car

  },
  setup () {
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    // const picurl1 = ref('https://z3.ax1x.com/2021/11/16/IfDVvd.png')
    return {
      activeIndex,
      activeIndex2,
      handleSelect
      // picurl1
    }
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
.el-header,
.el-footer {
  background-color: #fff;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 56px;
}

.el-main {
  background-color: #f4f4f4;
  color: var(--el-text-color-primary);
}

// 卡片
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 2vw;
}

.item {
  margin-bottom: 18px;
}

.image {
  width: 30vw;
  display: block;
}
.box-card {
  width: 30vw;
}
</style>
