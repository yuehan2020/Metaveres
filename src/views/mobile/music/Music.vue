<template>
    <div class="musicPage">
        <header>
            <!-- 顶部区域 -->
            <div class="topBox d-flex">
                <el-input
                    prefix-icon="el-icon-search"
                    v-model="query"
                    placeholder="搜索歌曲"
                    @keyup.enter="searchMusic"
                />
            </div>
        </header>
        <main>
            <!-- 歌曲列表 -->
            <div class="musicLeft">
                <el-card class="box-card m-b-20 d-flex" v-for="item in musicList" :key="item.index">
                    <div  class="text item ">
                        {{ item.name }}
                        <el-button @click="PlayMusic(item.id)">播放</el-button>
                    </div>
                </el-card>
            </div>
        </main>

        <!-- 播放控件 -->
        <div class="btn-audio audioContrlos">
            <audio
                class="audioContrlos"
                ref="audioCss"
                autoplay
                :src="musicUrl"
            ></audio>
            <el-button class="play" @click="fangGe">播放 </el-button>
        </div>

        <el-button id="out" @click="loginOut">退出</el-button>
    </div>
</template>

<script>
// import MusicMain from '../components/MusicMain.vue'
// import { reactive } from 'vue'
import Nav from '@/components/mobile/Nav.vue'

import axios from 'axios'
export default {
  name: 'MusicM',
  data () {
    return {
      // 搜索的关键字
      query: '',
      // 音乐列表
      musicList: [],
      // 歌曲网址
      musicUrl: ''
    }
  },
  components: {
    // MusicMain
    Nav
  },
  methods: {
    // 搜索歌曲
    searchMusic () {
      const that = this
      axios({
        method: 'get',
        url: 'https://autumnfish.cn/search?keywords=' + this.query
      }).then((response) => {
        that.musicList = response.data.result.songs
        // console.log(response.data.result.songs)
      })
    },
    // 播放音乐
    PlayMusic (musicId) {
      this.musicUrl =
                'https://music.163.com/song/media/outer/url?id=' + musicId + '.mp3'
      // 获取歌曲详情
      axios({
        method: 'get',
        url: 'https://autumnfish.cn/song/detail?ids=' + musicId
      }).then((response) => {
        console.log(response)
      })
    },

    // 退出功能
    loginOut () {
      console.log('退出了')
      this.$router.push('/')
    },
    // fangge
    fangGe () {
      const audio = this.$refs.audioCss
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }
    }
  },
  mounted () { },
  setup () {
    // const activeIndex = ref('1')
    // const activeIndex2 = ref('1')
    // const input = ref('')
    // const state = reactive({
    //   circleUrl:
    // 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    // })
    // return state
  }
}
</script>

<style lang="less" scoped>
.musicPage {
    .topBox {
        width: 100vw;
        height: 8vh;
        // background-color: pink;
        // align-items: center;
    }
}

// 歌曲列表
.musicLeft {
    // width: 30vw;

}

// 播放器的样式
.audioContrlos {
    position: fixed;
    bottom: 0;
    // height: 5vw;
    width: 100%;
    background-image: linear-gradient(45deg, #e66465, #9198e5);
}
.btn-audio {
    text-align: center;
    line-height: 5vw;
}

// 退出功能
#out {
    position: fixed;
    right: 0;
    top: 50%;
}
</style>
