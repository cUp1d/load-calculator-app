<template>
  <el-row :gutter="30">
    <el-col :span="2"></el-col>
    <el-col :span="8"><loader-selector></loader-selector></el-col>
    <el-col :span="3"></el-col>
    <el-col :span="10"><parameter-setter></parameter-setter></el-col>
    <el-col :span="2"></el-col>
  </el-row>

</template>

<script>
import LoaderSelector from "../components/LoaderSelector";
import ParameterSetter from "../components/ParameterSetter";
export default {
  name: "step1",
  components: {ParameterSetter, LoaderSelector}
};
</script>

<style scoped>
</style>