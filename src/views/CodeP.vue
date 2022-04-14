<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <template #header>
                <div class="card-header">
                    <span>map 和 foreach</span>
                    <el-button class="button" type="text"
                        >Operation button</el-button
                    >
                </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
                {{ "List item " + o }}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'codep'
}
</script>

<style lang="less" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
}
</style>
