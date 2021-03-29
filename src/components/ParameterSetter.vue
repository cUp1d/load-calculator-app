<template>
 <h1>STEP2: 货物信息添加</h1>
  <div id="form-container">
    <span class="el-form--label-top">编号</span>
    <span class="el-form--label-top">长度</span>
    <span class="el-form--label-top">宽度</span>
    <span class="el-form--label-top">高度</span>
    <span class="el-form--label-top">重量</span>
    <span class="el-form--label-top">数量</span>
    <span>{{productNumber}}</span>
    <span><el-input size="small" v-model="input1" placeholder="请输入内容"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>

    <span>{{productNumber}}</span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>

    <span>{{productNumber}}</span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
    <span><el-input size="small"></el-input></span>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ParameterSetter',
  defineComponent:({
    setup() {
      return {
        input1: ref('')
      }
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form-container{
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(6,1fr);
}
#form-container .el-form--label-top{
  font-size: large;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #c9d2e3;
  padding-bottom: 14px;
}
span{
  width: 80%;
  padding:10px;
}
</style>
