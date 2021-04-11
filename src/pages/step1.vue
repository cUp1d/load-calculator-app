<template>
  <el-row>
    <el-col :span="3"></el-col>
    <el-col :span="6"><loader-selector></loader-selector></el-col>
    <el-col :span="3"></el-col>
    <el-col :span="12"><parameter-setter></parameter-setter></el-col>
  </el-row>
  <el-affix position="top" :offset="640">
    <el-button id="submit-btn" type="primary" @click="next">开始计算</el-button>
  </el-affix>
</template>

<script>
import LoaderSelector from "../components/LoaderSelector";
import ParameterSetter from "../components/ParameterSetter";
import eventHub from "../plugins/eventHub";
export default {
  name: "step1",
  components: {ParameterSetter, LoaderSelector},
  methods:{
    next() {
      eventHub.$emit('set-loads', this.loads);
      eventHub.$emit('next');
    }
  }
};
</script>

<style>
span.step{
  color: rgb(143,173,200);
}
.el-button#submit-btn{
  margin-right: 45%;
  margin-left: 45%;
  z-index: 1;
  font-size:18px ;
}
</style>