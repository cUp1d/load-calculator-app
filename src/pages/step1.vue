<template>
  <el-row>
    <el-col :span="6"><loader-selector></loader-selector></el-col>
    <el-col :span="18"><parameter-setter></parameter-setter></el-col>
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