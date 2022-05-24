<template>
    <div class="code">
        <el-container>
            <el-header><Nav></Nav></el-header>
            <el-container>
                <el-aside width="200px">

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
                            ><span>HTML</span></el-menu-item
                        >

                        <el-menu-item index="musicDT">
                            <el-icon><Promotion /></el-icon>
                            <span>CSS</span>
                        </el-menu-item>
                        <el-menu-item index="musicMy">
                            <el-icon><UserFilled /></el-icon>
                            <span>JavaScript</span>
                        </el-menu-item>
                        <el-menu-item index="musicLogin">
                            <el-icon><StarFilled /></el-icon>
                            <span>Vue</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import {
    HomeFilled,
    Promotion,
    UserFilled,
    Sort,
    ArrowLeftBold,
    StarFilled
} from '@element-plus/icons-vue'
export default {
    name: 'codep',
    components: {
        Nav,
        HomeFilled,
        UserFilled,
        Promotion,
        Sort,
        ArrowLeftBold,
        StarFilled
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
</style>
