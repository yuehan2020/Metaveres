<template>
    <div class="HomeM d-flex">
        <header class="full_page">
            <!-- 导航菜单 -->
            <nav id="nav" class="d-flex">
                <span class="logo_name">
                    <a href="#">YueHan</a>
                </span>
                <div class="menus"></div>
            </nav>
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
                <el-row>
                    <el-col :span="24">
                        <el-card :body-style="{ padding: '0px' }">
                            <img
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image"
                            />
                            <div style="padding: 14px">
                                <span>小涵后台管理系统</span>
                                <div class="bottom">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button"
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
    </div>
</template>

<script>
export default {
    name: 'HomeM',
    data() {
        return {
            currentDate: new Date()
        }
    },
    methods: {
        ToMusic() {

            this.$router.push({ name: 'MusicM' })
        }
    },
}
</script>

<style lang="less" scoped>
.HomeM {
    flex-direction: column;
    min-height: 100vh;
    .full_page {
        height: 100vh;
        background-image: url("~@/assets/bgM.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 0.5s;
        // 导航菜单样式
        #nav {
            position: absolute;
            top: 0;
            width: 100%;
            height: 60px;
            opacity: 1;
            filter: none;
            padding: 0 16px;
            align-items: center;
            font-size: 1.3em;
            transition: all 0.5s;
            .logo_name {
                flex: 1;
                a {
                    text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
                    font-weight: 700;
                    cursor: pointer;
                    color: #eee;
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
                height: 230px ;
                display: block;
            }
        }
    }
}
</style>