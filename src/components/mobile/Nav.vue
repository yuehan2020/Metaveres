<template>
    <!-- 导航菜单 -->
    <nav id="nav">
        <el-row align="middle" :gutter="6">
            <el-col :span="20">
                <span class="logo_name">
                    <a href="#">YHan</a>
                </span>
            </el-col>
            <el-col :span="2">
                <el-icon :size="20" color="#fff">
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-ba633cb8=""
                    >
                        <path
                            fill="currentColor"
                            d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                        ></path>
                    </svg>
                </el-icon>
            </el-col>
            <el-col :span="2" @click="handleShowDrawer">
                <el-icon :size="20" color="#fff">
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-ba633cb8=""
                    >
                        <path
                            fill="currentColor"
                            d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
                        ></path>
                    </svg>
                </el-icon>
            </el-col>
        </el-row>
    </nav>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'navM',
  props: {

  },
  mounted () {
  },
  data () {
    return {

    }
  },
  setup () {
    const store = useStore()
    // 菜单弹出方法
    const handleShowDrawer = () => {
      store.commit('updateShowDrawer')
    }
    return { handleShowDrawer }
  }
}
</script>

<style  lang="less" scoped>
// 导航菜单样式
#nav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    opacity: 1;
    filter: none;
    padding: 0 16px;
    font-size: 1.3em;
    transition: all 0.5s;
    .el-row {
        height: 100%;
    }
    .logo_name {

        a {
            text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
            font-weight: 700;
            cursor: pointer;
            color: #eee;
        }
    }
}
</style>
