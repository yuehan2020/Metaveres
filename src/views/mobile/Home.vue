<template>
    <div class="HomeM">
        <header class="full_page">
            <!-- 导航菜单 -->
            <nav id="nav">
                <span class="logo_name">
                    <a href="#">YueHan</a>
                </span>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HomeM'
}
</script>

<style lang="less" scoped>
.HomeM {
    .full_page {
        height: 100vh;
        background-image: url("~@/assets/bgM.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 0.5s;
        // 导航菜单样式
        #nav {
            width: 100%;
            height: 60px;
            opacity: 1;
            filter: none;
            .logo_name a {
                text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
                font-weight: 700;
                cursor: pointer;
                color: #eee;
            }
        }
    }
}
</style>