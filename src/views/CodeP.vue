<template>
    <div class="code">
        <Nav></Nav>
        <div class="car">
            <span>数组去重</span>
            <input type="text" v-model="waitClean">

        </div>
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
            waitClean:[]
        }
    },
}
</script>

<style lang="less" scoped>
.code {
    .car {
        width: 20vw;
        height: 20vw;
        background-color: pink;
    }
}
</style>
