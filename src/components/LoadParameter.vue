<template>
  <el-card class="box-card">
    <div class="text item">
<!--      <span class="el-form&#45;&#45;label-top">长度</span>-->
<!--      <span class="el-form&#45;&#45;label-top">宽度</span>-->
<!--      <span class="el-form&#45;&#45;label-top">高度</span>-->
<!--      <span class="el-form&#45;&#45;label-top">重量</span>-->
<!--      <span class="el-form&#45;&#45;label-top">数量</span>-->
<!--      <span class="el-form&#45;&#45;label-top"></span>-->
<!--      <span><el-input-number :min="1" :max="10" v-model="length"></el-input-number></span>-->
<!--      <span><el-input-number :min="1" :max="10" v-model="width"></el-input-number></span>-->
<!--      <span><el-input-number :min="1" :max="10" v-model="height"></el-input-number></span>-->
<!--      <span><el-input-number :min="1" :max="10" v-model="weight"></el-input-number></span>-->
<!--      <span><el-input-number :min="1" :max="10" v-model="amount"></el-input-number></span>-->
      <el-form label-position="top" label-width="80px" :inline="true">
        <el-form-item label="长度">
          <el-input v-model="param.length" placeholder="长度"></el-input>
        </el-form-item>
        <el-form-item label="宽度">
          <el-input v-model="param.width" placeholder="宽度"></el-input>
        </el-form-item>
        <el-form-item label="高度">
          <el-input v-model="param.height" placeholder="高度"></el-input>
        </el-form-item>
        <el-form-item label="重量">
          <el-input v-model="param.weight" placeholder="重量"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="param.amount" placeholder="数量"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "LoadParameter",
  props: ["param"]
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 960px;
}
</style>