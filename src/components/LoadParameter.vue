<template>
  <span><el-input-number :min="1" :max="10" v-model="length"></el-input-number></span>
  <span><el-input-number :min="1" :max="10" v-model="width"></el-input-number></span>
  <span><el-input-number :min="1" :max="10" v-model="height"></el-input-number></span>
  <span><el-input-number :min="1" :max="10" v-model="weight"></el-input-number></span>
  <span><el-input-number :min="1" :max="10" v-model="amount"></el-input-number></span>
</template>

<script>
export default {
  name: "LoadParameter",
  props: ["length", "width", "height", "weight", "amount"]
};
</script>

<style scoped>

</style>