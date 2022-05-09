<template>
    <div class="home">
        <!-- 导航菜单 -->
        <Nav></Nav>

        <!-- 主体区域 -->
        <main class="home_layout">
            <!-- 内容区 -->
            <div class="recent_posts">
                <div class="recent_post-item" style="width: 100%; height: auto">
                    <div class="catalog_magnet d-flex">
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >🍓 我 (3)</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >🍋 喜欢 (4)</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >🍫 西瓜</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >🍭 草莓 (26)</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >🌠 橘子 (11)</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >💡 冰淇淋 (6)</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >🌈 面经大全 (17)</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <div class="magnet_item">
                            <a class="magnet_link" href="#"
                                ><div class="magnet_link_context" style="">
                                    <span style="font-weight: 500; flex: 1"
                                        >🍬 工作与生活 (1)</span
                                    ><span
                                        style="
                                            padding: 0px 4px;
                                            border-radius: 8px;
                                        "
                                        ><i
                                            class="fas fa-arrow-circle-right"
                                        ></i
                                    ></span></div
                            ></a>
                        </div>
                        <a
                            class="magnet_link_more"
                            href="#"
                            style="
                                flex: 1;
                                text-align: center;
                                margin-bottom: 10px;
                            "
                            >查看更多...</a
                        >
                    </div>
                </div>
                <!-- <div
                    class="recent_post-item"
                    style="width: 100%; height: 200px"
                >
                    2
                </div> -->
                <div class="recent_post-item">
                    <!-- 音乐卡 -->
                    <Car
                        title="小涵音乐"
                        banner="https://z3.ax1x.com/2021/11/16/IfDVvd.png"
                        ToGo="/music"
                    ></Car>
                </div>
                <div class="recent_post-item">
                    <!-- 电商后台管理系统 -->
                    <Car
                        title="小涵商城后台管理"
                        banner="https://z3.ax1x.com/2021/11/16/IfKdN6.png"
                        ToGo="/backstage"
                    ></Car>
                </div>
                <div class="recent_post-item">
                    <!-- 商城卡 -->
                    <Car
                        title="小涵商城前台管理"
                        banner="https://z3.ax1x.com/2021/11/16/IfT21s.png"
                        ToGo="/shop"
                    ></Car>
                </div>
                <div class="recent_post-item">
                    <Car
                        title="小涵代码练习"
                        banner="https://img2.baidu.com/it/u=4156000803,3648738866&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        ToGo="/codep"
                    ></Car>
                </div>
            </div>
            <!-- 侧边栏 -->
            <div class="aside_content">
                <!-- 信息盒 -->
                <div class="card-widget card-info d-flex">
                    <div class="card-info-avatar">
                        <el-avatar :size="110" :src="circleUrl"></el-avatar>
                        <div class="author-info__name">小涵</div>
                        <div class="author-info__description">
                            学如逆水行舟，不进则退。
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- 底部区域 -->
        <footer>
            <div style="width: 300px; margin: 0 auto; padding: 20px 0">
                <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001329"
                    style="
                        display: inline-block;
                        text-decoration: none;
                        height: 20px;
                        line-height: 20px;
                    "
                    ><img src="../assets/备案图标.png" style="float: left" />
                    <p
                        style="
                            float: left;
                            height: 20px;
                            line-height: 20px;
                            margin: 0px 0px 0px 5px;
                            color: #939393;
                        "
                    >
                        鄂公网安备 42011502001329号
                    </p>
                </a>
                <a
                    target="_blank"
                    href="https://beian.miit.gov.cn/"
                    style="
                        display: inline-block;
                        text-decoration: none;
                        height: 20px;
                        line-height: 20px;
                    "
                >
                    <p
                        style="
                            float: left;
                            height: 20px;
                            line-height: 20px;
                            margin: 0px 0px 0px 5px;
                            color: #939393;
                        "
                    >
                        鄂ICP备2021009303号-1
                    </p>
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
// import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
import { onMounted, ref } from "vue";
import Car from "../components/Car.vue";
import Nav from '../components/Nav.vue'
// @ is an alias to /src

export default {
    name: "Home",
    components: {
        Car,
        Nav
    },
    mounted() {

    },
    data() {
        return {
            // 头像
            circleUrl: 'https://img0.baidu.com/it/u=2833019745,1702226611&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        }
    },
    methods: {

    },
    setup() {
        const activeIndex = ref("1");
        const activeIndex2 = ref("1");
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath);
        };
        // const picurl1 = ref('https://z3.ax1x.com/2021/11/16/IfDVvd.png')
        return {
            activeIndex,
            activeIndex2,
            handleSelect,
            // picurl1
        };


    },
};
</script>



<style lang="less" scoped>
.home {
    font-size: 14px;

    background: linear-gradient(
        90deg,
        rgba(247, 149, 51, 0.1),
        rgba(243, 112, 85, 0.1) 15%,
        rgba(239, 78, 123, 0.1) 30%,
        rgba(161, 102, 171, 0.1) 44%,
        rgba(80, 115, 184, 0.1) 58%,
        rgba(16, 152, 173, 0.1) 72%,
        rgba(7, 179, 155, 0.1) 86%,
        rgba(109, 186, 130, 0.1)
    );
    background-size: cover;
    background-repeat: no-repeat;

    // 主体样式
    .home_layout {
        display: flex;
        // padding: 0 64px;
        margin: 0 auto;
        padding: 2rem 15px;
        max-width: 1200px;

        .recent_posts {
            margin-top: -1rem;
            align-content: flex-start;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .recent_post-item {
                width: 49%;
                margin-top: 1rem;
                border-radius: 12px 8px 8px 12px;
                background-color: #fff !important;
                box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
                transition: all 0.3s;
                .catalog_magnet {
                    flex-wrap: wrap;
                    width: 100%;
                    justify-content: space-between;
                    padding: 10px 10px 0 10px;
                    align-content: flex-start;
                    .magnet_item {
                        flex-basis: calc(50% - 5px);
                        background: #f2f2f2;
                        margin-bottom: 10px;
                        border-radius: 8px;
                        transition: all 0.2s ease-in-out;
                        .magnet_link {
                            color: black;
                            .magnet_link_context {
                                display: flex;
                                padding: 10px;
                                font-size: 16px;
                                transition: all 0.2s ease-in-out;

                            }
                            .magnet_link_context:hover {
                                padding: 10px 20px;
                            }
                        }
                        .magnet_link:hover {
                            color: white;
                        }
                    }
                    .magnet_item:hover {
                        background: #b30070;
                    }
                }
            }
            .recent_post-item:hover {
                box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.15) !important;
            }
        }
        // 侧边样式
        .aside_content {
            padding-left: 15px;
            width: 80%;
            .card-widget {
                flex-direction: column;
                position: relative;
                overflow: hidden;
                padding: 1rem 1.2rem;
                border-radius: 8px;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
            }
            .card-info {
                .card-info-avatar {
                    text-align: center;
                    /deep/ .el-avatar:hover {
                        transform: rotate(360deg);
                        transition: all 0.5s;
                    }
                    .author-info__name {
                        font-weight: 500;
                        font-size: 1.57em;
                    }
                    .author-info__description {
                        margin-top: -0.3rem;
                    }
                }
            }
        }
    }
}
a {
    text-decoration: none;
    color: #909399;
}
a:hover {
    color: #409eff;
}
</style>
