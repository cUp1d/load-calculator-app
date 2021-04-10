<template>
  <el-container>
    <el-header><h1>智能航空装载计算器</h1></el-header>
    <el-container>
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
