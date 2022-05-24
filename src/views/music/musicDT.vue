<template>
  <div>
      {{defaultText}}

      我是默认数字{{countvalue}}
      <el-button @click="add">count+1</el-button>
  </div>
</template>

<script>
export default {
    name:'musicDT',
    data() {
        return {
            defaultText:this.$store.state.defaultText,
            count:this.$store.state.count
        }
    },
    methods: {
        add(){
            this.$store.commit('add')
        }
    },
    computed: {
        countvalue(){
            return this.$store.state.count;
        }
    },
}
</script>

<style>

</style>