<template>
  <el-container>
    <el-header><h1>智能航空装载计算器</h1></el-header>
    <el-container>
      <el-main>
        <el-row :gutter="40">
          <el-col :span="11">
            <loader-selector></loader-selector>
          </el-col>
          <el-col :span="13">
            <parameter-setter/>
            <h1>STEP3: 计算模拟装载方案</h1>
            <el-button type="primary">开始</el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ParameterSetter from './components/ParameterSetter.vue'
import LoaderSelector from "@/components/LoaderSelector";

export default {
  name: 'App',
  components: {
    LoaderSelector,
    ParameterSetter
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
.el-col .el-button{
  box-shadow:0 0 10px rgba(0,136,255,0.4) ;
  -webkit-box-shadow: 0 0 10px rgba(0,136,255,0.4);

}
</style>
