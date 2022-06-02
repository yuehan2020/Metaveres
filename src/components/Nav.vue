<template>
    <div>
        <header class="not-top-img show">
            <nav>
                <span id="blog_name">
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="声明式导航"
                        placement="bottom-start"
                    >
                        <router-link to="/">小涵の宇宙</router-link>
                    </el-tooltip>
                </span>
                <div @click="dialogVisible = true" class="search-button">
                    <el-icon
                        ><svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            data-v-78e17ca8=""
                        >
                            <path
                                fill="currentColor"
                                d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
                            ></path></svg></el-icon>
                    <span  style="padding-left: 0.7rem">搜索</span>
                </div>
                <div
                    id="menus"
                    v-for="menu in menus.menuName"
                    :key="menu.index"
                >
                    <div class="menus_item" @click="toDetail">{{ menu }}</div>
                </div>
            </nav>
        </header>

        <!-- 弹窗 -->
        <el-dialog
            v-model="dialogVisible"
            title="本地搜索"
            width="30%"

        >
            <el-input v-model="navSearch" placeholder="请输入内容"></el-input>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false"
                        >搜索</el-button
                    >
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      menus: {
        menuName: ['首页', '关于']
      },
      dialogVisible: false,
      navSearch:''

    }
  },
  methods: {
    //   导航栏跳转事件
      toDetail(){
         this.$router.push('/about')
      }
  },

}
</script>

<style lang='less' scoped>
// 导航栏
.not-top-img {
    position: relative;
    width: 100%;
    margin-bottom: 0.5rem;
    height: 60px;
    transition: all 0.5s;
    nav {
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 5px 6px -5px rgb(133 133 133);
        position: absolute;
        top: 0;
        z-index: 90;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0 36px;
        width: 100%;
        height: 60px;
        font-size: 1.3em;
        transition: all 0.5s;
        opacity: 1;

        filter: none;
        .search-button {
            font-size: 0.78em;
        }
        #blog_name {
            flex: 1;
            a {
                color: #4c4948;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.2s;
                text-shadow: none;
            }
        }
        #menus {
            font-size: 0.78em;
            .menus_item {
                padding-left: 0.7rem;
            }
        }
    }
}
</style>
