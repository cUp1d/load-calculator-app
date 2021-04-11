<template>
  <el-card class="box-card">
<!--      <span class="el-form&#45;&#45;label-top">长度</span>-->
<!--      <span class="el-form&#45;&#45;label-top">宽度</span>-->
<!--      <span class="el-form&#45;&#45;label-top">高度</span>-->
<!--      <span class="el-form&#45;&#45;label-top">重量</span>-->
<!--      <span class="el-form&#45;&#45;label-top">数量</span>-->
<!--      <span class="el-form&#45;&#45;label-top"></span>-->
<!--      <span><el-input size="mini" -number :min="1" :max="10" v-model="length"></el-input-number></span>-->
<!--      <span><el-input size="mini" -number :min="1" :max="10" v-model="width"></el-input-number></span>-->
<!--      <span><el-input size="mini" -number :min="1" :max="10" v-model="height"></el-input-number></span>-->
<!--      <span><el-input size="mini" -number :min="1" :max="10" v-model="weight"></el-input-number></span>-->
<!--      <span><el-input size="mini" -number :min="1" :max="10" v-model="amount"></el-input-number></span>-->
<!--      <el-form label-position="top" label-width="30px">-->
<!--        <el-form-item label="长度">-->
<!--          <el-input size="mini" v-model="param.length"><template #suffix>mm</template></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="宽度">-->
<!--          <el-input size="mini" v-model="param.width" placeholder="宽度"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="高度">-->
<!--          <el-input size="mini" v-model="param.height" placeholder="高度"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="重量">-->
<!--          <el-input size="mini" v-model="param.weight" placeholder="重量"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="数量">-->
<!--          <el-input size="mini" v-model="param.amount" placeholder="数量"></el-input>-->
<!--        </el-form-item>-->
<!--      </el-form>-->

      <el-row :gutter="30">
        <el-col span="4">
          <el-input size="mini" v-model="param.length">
            <template #suffix>mm</template>
          </el-input>
        </el-col>
        <el-col span="4">
          <el-input size="mini" v-model="param.width">
            <template #suffix>mm</template>
          </el-input>
        </el-col>
        <el-col span="4">
          <el-input size="mini" v-model="param.height">
            <template #suffix>mm</template>
          </el-input>
        </el-col>
        <el-col span="4">
          <el-input size="mini" v-model="param.weight">
            <template #suffix>kg</template>
          </el-input>
        </el-col>
        <el-col span="4">
          <el-input size="mini" v-model="param.amount">
            <template #suffix>件</template>
          </el-input>
        </el-col>
      </el-row>
  </el-card>
</template>

<script>
export default {
  name: "LoadParameter",
  props: ["param"]
};
</script>

<style scoped>
.el-input{
  width: 80px;
}
.box-card{
  margin:8px;
}
</style>