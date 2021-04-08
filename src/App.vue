<template>
  <el-container>
    <el-header><h1>智能航空装载计算器</h1></el-header>
    <el-container>
      <el-main @select-container="selectContainer" @next="next" @prev="prev" @set-loads="setLoads">
        <el-steps :active="current">
          <el-step title="步骤 1" :description="this.description"></el-step>
          <el-step title="步骤 2" description="货物信息添加"></el-step>
          <el-step title="步骤 3" description="费用计算"></el-step>
        </el-steps>
        <loader-selector v-if="current===0"></loader-selector>
        <parameter-setter v-else-if="current===1"></parameter-setter>
        <result v-else-if="current===2"></result>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ParameterSetter from './components/ParameterSetter.vue'
import LoaderSelector from "./components/LoaderSelector";
import Result from "./components/Result";

export default {
  name: 'App',
  components: {
    Result,
    LoaderSelector,
    ParameterSetter,
  },
  data() {
    return {
      container: "",
      loads: [],
      current: 0
    }
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    selectContainer(name) {
      this.container = name
      this.next()
    },
    setLoads(loads) {
      this.loads = loads
    }
  },
  computed: {
    description() {
      return this.current > 0? `已选择${this.container}集装箱` : "集装箱型号选择"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header{
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}
</style>
