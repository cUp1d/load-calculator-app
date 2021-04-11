<template>
  <h1><span class="step">STEP2: </span>货物信息添加</h1>
  <!--  <div id="form-container">-->
  <el-row v-for="(load, index) in loads" :key="index">
    <LoadParameter
        v-model:param="load.param"
    />
    <span><el-button type="danger" plain  @click="removeLoad(index)"><i class="el-icon-delete" ></i></el-button></span>
  </el-row>
  <!--  </div>-->
  <el-button style="margin-top: 12px;" @click="next">开始计算</el-button>
  <el-button style="margin-top: 12px;" @click="addLoad">添加负载</el-button>
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
.step{
  color: rgb(143,173,200);
}
</style>
