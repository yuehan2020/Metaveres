<template>
    <div class="code">
        <Nav></Nav>
        <div class="car">
            <router-link to="/bHome">6</router-link>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
    name: 'codep',
    components:{
        Nav
    }
}
</script>

<style lang="less" scoped>
.code {
.car {
    width: 20%;
}
}

</style>
