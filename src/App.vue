<template>
  <el-container>
    <el-header style="margin-top: 3%"><h1>航空装载器装箱方案计算</h1></el-header>
    <el-container style="margin-top: 3%">
      <el-main>
        <step1 v-if="current===0"></step1>
        <result v-else-if="current===1"></result>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ParameterSetter from './components/ParameterSetter.vue'
import LoaderSelector from "./components/LoaderSelector";
import Result from "./components/Result";
import Step1 from "./pages/step1";
import eventHub from "./plugins/eventHub"

export default {
  name: 'App',
  components: {
    Step1,
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
  mounted() {
    eventHub.$on("select-container", this.selectContainer)
    eventHub.$on("next", this.next)
    eventHub.$on("prev", this.prev)
    eventHub.$on("set-loads", this.setLoads)
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
      return this.current > 0? `已选择${this.container}集装器` : "集装器型号选择"
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
h1{
  font-size: 2em;
  font-weight: normal;
}
.el-row {
  margin-bottom: 20px;
}
</style>
