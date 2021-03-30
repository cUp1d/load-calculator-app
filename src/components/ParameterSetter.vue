<template>
  <h1>STEP2: 货物信息添加</h1>
  <el-button style="margin-top: 12px;" @click="$parent.$emit('prev')">上一步</el-button>
  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  <el-button style="margin-top: 12px;" @click="addLoad">添加负载</el-button>
  <div id="form-container">
    <span class="el-form--label-top">长度</span>
    <span class="el-form--label-top">宽度</span>
    <span class="el-form--label-top">高度</span>
    <span class="el-form--label-top">重量</span>
    <span class="el-form--label-top">数量</span>
    <span class="el-form--label-top"></span>
    <template v-for="(load, index) in loads" :key="index">
      <LoadParameter
          v-model:length="load.length"
          v-model:width="load.width"
          v-model:height="load.height"
          v-model:weight="load.weight"
          v-model:amount="load.amount"
      />
      <span><el-button type="danger" icon="el-icon-delete" circle @click="removeLoad(index)"></el-button></span>
    </template>
  </div>
</template>

<script>
import LoadParameter from "./LoadParameter";

export default {
  name: 'ParameterSetter',
  components: {LoadParameter},
  data() {
    return {
      loads: [{
        length: 0,
        width: 0,
        height: 0,
        weight: 0,
        amount: 0,
      }
      ]
    };
  },
  methods: {
    addLoad() {
      this.loads.push({
        length: 0,
        width: 0,
        height: 0,
        weight: 0,
        amount: 0,
      });
    },
    removeLoad(id) {
      this.loads.splice(id, 1);
    },
    next() {
      this.$parent.$emit('set-loads', this.loads)
      this.$parent.$emit('next')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
