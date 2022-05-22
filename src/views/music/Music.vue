<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="iscollapse ? '64px' : '200px'">
                <div class="toggle-button"  :style="rote" @click="toggleChange">    <el-icon size="size" color="color">
      <ArrowLeftBold />
    </el-icon></div>
                <!-- 菜单 -->
                <div class="MenuBox">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#F6F7F8"
                        text-color="#61666D"
                        active-text-color="#FF6699"
                        :collapse="iscollapse"
                        router
                    >
                        <el-menu-item index="musicHome"
                            ><el-icon><HomeFilled /></el-icon
                            ><span>首页</span></el-menu-item
                        >

                        <el-menu-item index="musicDT">
                            <el-icon><Promotion /></el-icon>
                            <span>动态</span>
                        </el-menu-item>
                        <el-menu-item index="musicMy">
                            <el-icon><UserFilled /></el-icon>
                            <span>我的</span>
                        </el-menu-item>
                        <el-menu-item index="musicLogin">
                            <el-icon><StarFilled /></el-icon>
                            <span>登录</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 顶部区域 -->
                    <Nav></Nav
                ></el-header>
                <el-main> <router-view></router-view> </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// import MusicMain from '../components/MusicMain.vue'
// import { reactive } from 'vue'

// 图标

import axios from 'axios'
import Nav from '../../components/Nav.vue'
import {
    HomeFilled,
    Promotion,
    UserFilled,
    Sort,
    ArrowLeftBold,
    StarFilled
} from '@element-plus/icons-vue'
export default {
    name: 'Music',
    data() {
        return {
            // 搜索的关键字
            query: '',
            // 音乐列表
            musicList: [],
            // 歌曲网址
            musicUrl: '',
            iscollapse: false,
            rote:{
                
            }
        }
    },
    components: {
        Nav,
        HomeFilled,
        UserFilled,
        Promotion,
        Sort,
        ArrowLeftBold,
        StarFilled
    },
    methods: {
        // 搜索歌曲
        toggleChange(){
            this.iscollapse=!this.iscollapse
        },
        searchMusic() {
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
        PlayMusic(musicId) {
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
        loginOut() {
            console.log('退出了')
            this.$router.push('/')
        },
        // fangge
        fangGe() {
            const audio = this.$refs.audioCss
            if (audio.paused) {
                audio.play()
            } else {
                audio.pause()
            }
        }
    },
    mounted() { },
    setup() {

    }
}
</script>

<style lang="less" scoped>
// 歌曲列表
.musicLeft {
    width: 30vw;
    background-image: linear-gradient(45deg, skyblue, pink);
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // align-items: center;
        li {
            display: flex;
            justify-content: space-between;
            flex: 1;
            list-style: none;
            el-button {
                flex: 1;
            }
        }
    }
}

// 播放器的样式
.audioContrlos {
    position: fixed;
    bottom: 0;
    height: 5vw;
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

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
// 折叠按钮
.el-aside{
    transition: all .3s;
    background-color: #F6F7F8;
.toggle-button {
  background-color: #F6F7F8;
  font-size: 10px;
  line-height: 24px;
  color: #61666D;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
}

</style>
