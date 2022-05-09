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
                <div id="menus" v-for="menu in menus.menuName" :key="menu.index">
                    <div class="menus_item">{{menu}}</div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            menus:{
                menuName:['首页','关于我']
            }
            

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
            .menus_item {
                padding-left: 0.7rem;
            }
        }
    }
}
</style>