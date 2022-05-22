<template>
    <div>
        <main>
            <el-input
                prefix-icon="el-icon-search"
                v-model="query"
                placeholder="搜索歌曲"
                @keyup.enter="searchMusic"
            />
            <el-avatar
                :size="50"
                src="https://img0.baidu.com/it/u=2896916242,3383900176&fm=26&fmt=auto"
            ></el-avatar>

            <!-- 歌曲列表 -->
            <div class="musicLeft">
                <ul>
                    <li v-for="item in musicList" :key="item.index">
                        {{ item.name }}
                        <el-button @click="PlayMusic(item.id)">播放</el-button>
                    </li>
                </ul>
            </div>

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
        </main>
    </div>
</template>

<script>
// import MusicMain from '../components/MusicMain.vue'
// import { reactive } from 'vue'
import url from '@/api/url.js'
import {getRequest} from'@/api/api.js'
// 图标

import axios from 'axios'
import Nav from '../../components/Nav.vue'
import {
    HomeFilled,
    Promotion,
    UserFilled,
    Sort
} from '@element-plus/icons-vue'
export default {
    name: 'musicHome',
    data() {
        return {
            // 搜索的关键字
            query: '',
            // 音乐列表
            musicList: [],
            // 歌曲网址
            musicUrl: '',
            iscollapse: false,
				navId: 58100, //导航栏的id

        }
    },
    components: {
        Nav,
        HomeFilled,
        UserFilled,
        Promotion,
        Sort
    },
    methods: {
        // 搜索歌曲
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
        },
        // 获取视频数据
        async getVideo(navId) {
            let data =this.navId
            let videoDatas = await getRequest(
                url.video,
                data
            )
            console.log(videoDatas);
            // this.offset++;
            // this.videoDatas = videoDatas.datas
            // console.log(this.videoDatas)
        },
    },
    mounted() { 
        this.getVideo()
    },
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
</style>
