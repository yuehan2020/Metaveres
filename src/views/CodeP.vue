<template>
    <div class="code">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header><Nav></Nav></el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
    name: 'codep',
    components: {
        Nav
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
</style>
