<template>
  <h2><span class="step">STEP2: </span>货物信息添加</h2>
  <!--  <div id="form-container">-->
<!--  <el-row :gutter="40">-->
<!--    <el-col span="4">长度</el-col>-->
<!--    <el-col span="4">宽度</el-col>-->
<!--    <el-col span="4">高度</el-col>-->
<!--    <el-col span="4">重量</el-col>-->
<!--    <el-col span="4">数量</el-col>-->
<!--  </el-row>-->
  <div class="form-label">
    <span>长度</span>
    <span>宽度</span>
    <span>高度</span>
    <span>重量</span>
    <span>数量</span>
  </div>
  <el-row v-for="(load, index) in loads" :key="index">
    <LoadParameter
        v-model:param="load.param"
    />
    <span><el-button type="danger" plain icon="el-icon-delete" @click="removeLoad(index)">删除</el-button></span>
  </el-row>
  <!--  </div>-->
  <el-button style="margin-top:12px;margin-left: 33%;" icon="el-icon-circle-plus" @click="addLoad">添加货物</el-button>
<!--  <el-button type="primary" style="margin-top: 12px;"></el-button>-->
</template>

<script>
import LoadParameter from "./LoadParameter";
import eventHub from "../plugins/eventHub";
import {ref} from 'vue'

export default {
  name: 'ParameterSetter',
  components: {LoadParameter},
  data() {
    return {
      loads: [
        {param:{
            length: ref(''),
            width: ref(''),
            height: ref(''),
            weight: ref(''),
            amount: ref(''),
          }}
      ]
    };
  },
  methods: {
    addLoad() {
      this.loads.push({param:{
          length: ref(''),
          width: ref(''),
          height: ref(''),
          weight: ref(''),
          amount: ref(''),
        }});
    },
    removeLoad(id) {
      this.loads.splice(id, 1);
    },
    next() {
      eventHub.$emit('set-loads', this.loads);
      eventHub.$emit('next');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.form-label{
  margin: 12px 16px 0;
}
div.form-label span{
  padding: 38px;
  font-size: 16px;
  color:#909399;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
/*.el-col{*/
/*  font-size: 18px;*/
/*}*/
span .el-button{
  margin-top:24px;
}
</style>
