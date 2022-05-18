<template>
    <div class="HomeM d-flex">
        <header class="full_page">
            <!-- 导航菜单 -->
            <Nav></Nav>

            <!-- 中心信息 -->
            <div class="site_info">
                <h1 class="site_title">YHan</h1>
                <div class="site_subtitle">
                    <span class="subtitle">{{ showSentence }}</span>
                    <span class="typer-cursor">|</span>
                </div>
            </div>
        </header>
        <!-- 主体内容 -->
        <main class="layout d-flex">
            <div class="content">
                <el-row>
                    <el-col :span="24">
                        <el-card :body-style="{ padding: '0px' }">
                            <img
                                src="https://z3.ax1x.com/2021/11/16/IfDVvd.png"
                                class="image"
                            />
                            <div style="padding: 14px">
                                <span>小涵音乐</span>
                                <div class="bottom">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button
                                        type="text"
                                        class="button"
                                        @click="ToMusic"
                                        >点击进入</el-button
                                    >
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div class="aside_content"></div>
        </main>

        <!-- 侧边按钮 -->
        <div class="rightside">
            <div class="">
                <el-backtop :right="10" :bottom="100" />
            </div>
        </div>

        <!-- 侧边菜单 -->
        <el-drawer
            v-model="store.state.ShowDrawer"
            title="要快乐"
            direction="rtl"
            size="75%"

        >
            <span>Hi</span>
        </el-drawer>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { toRef, reactive } from 'vue'
import Nav from '../../components/mobile/Nav.vue'

export default {
  name: 'HomeM',
  setup () {
    const store = useStore()
    return {
      store
    }
  },
  data () {
    return {
      currentDate: new Date(),
      Sentence: '', // 今日诗词
      showSentence: '',
      index: 0
    }
  },
  mounted () {
    this.loadSentence()

    setInterval(() => {
      this.autoTyping()
    }, 300)
  },
  methods: {
    ToMusic () {
      this.$router.push({ name: 'MusicM' })
    },
    // 加载今日诗词
    loadSentence () {
      const jinrishici = require('jinrishici')
      jinrishici.load(result => {
        this.Sentence = result.data.content
      }, err => {
        console.log(err)
      })
    },
    // 打字效果
    autoTyping () {
      this.index++
      this.showSentence = this.Sentence.slice(0, this.index)
      // this.index = this.showSentence === this.Sentence ? 0 : this.index
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="less" scoped>
.HomeM {
    flex-direction: column;
    min-height: 100vh;
    .full_page {
        height: 100vh;
        background-color: pink;
        background-image: url("~@/assets/bgM.webp");

        background-repeat: no-repeat;
        background-size: cover;
        transition: all 0.5s;
        .site_info {
            position: absolute;
            top: 43%;
            padding: 0 10px;
            width: 100%;
            text-align: center;
            font-family: Titillium Web, "PingFang SC", "Hiragino Sans GB",
                "Microsoft JhengHei", "Microsoft YaHei", sans-serif;
            .site_title {
                margin: 0;
                color: #fff;
                font-size: 1.85em;
                text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
                line-height: 1.5;
            }
            .site_subtitle {
                color: #eee;
                font-size: 1.15em;
                .typer-cursor {
                    animation: flash 1.5s linear infinite;
                }
            }
        }
    }

    // 主体内容
    .layout {
        flex: 1;
        width: 100%;
        padding: 20px 5px;
        flex-direction: column;
        .content {
            width: 100%;
            .time {
                font-size: 12px;
                color: #999;
            }

            .bottom {
                margin-top: 13px;
                line-height: 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .button {
                padding: 0;
                min-height: auto;
            }

            .image {
                width: 100%;
                height: 230px;
                display: block;
            }
        }
    }
}
</style>
