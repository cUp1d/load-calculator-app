<template>
  <h1>STEP1: 集装箱型号选择</h1>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" :body-style="{ padding: '5px' ,height:'30vh'}">
        <div class="card-header"><span>AAU</span></div>
        <img src="../assets/AAU.jpg" class="image">
        <div style="padding: 14px;vertical-align: bottom">
        <div class="bottom">
            <el-button round type="primary" class="button">选择</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover" :body-style="{ padding: '5px' ,height:'30vh'}">
        <div class="card-header"><span>ALF</span></div>
        <img src="../assets/ALF.jpg" class="image">
        <div style="padding: 14px;vertical-align: bottom">
          <div class="bottom">
            <el-button round type="primary" class="button">选择</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover" :body-style="{ padding: '5px' ,height:'30vh'}">
        <div class="card-header"><span>AMA</span></div>
        <img src="../assets/AMA.jpg" class="image" style="width: 80%;margin-left: 10%">
        <div style="padding: 14px;vertical-align: bottom">
          <div class="bottom">
            <el-button round type="primary" class="button">选择</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" :body-style="{ padding: '5px' ,height:'30vh'}">
        <div class="card-header"><span>PAG</span></div>
        <img src="../assets/PAG.jpg" class="image" alt="air-loader">
        <div style="padding: 14px;">
          <div class="bottom">
            <el-button round type="primary" class="button">选择</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover" :body-style="{ padding: '5px' ,height:'30vh'}">
        <div class="card-header"><span>PGA</span></div>
        <img src="../assets/PGA.jpg" class="image" alt="air-loader">
        <div style="padding: 14px;">
          <div class="bottom">
            <el-button round type="primary" class="button">选择</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover" :body-style="{ padding: '5px',height:'30vh'}">
        <div class="card-header"><span>PLA</span></div>
        <img src="../assets/PLA.jpg" class="image" alt="air-loader">
        <div style="padding: 14px;">
          <div class="bottom">
            <el-button round type="primary" class="button">选择</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "LoaderSelector"
}
</script>

<style scoped>
.card-header{
  padding: 5%;
  font-size: large;
  text-align: center;
}
.bottom {
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding:6px 8px;
  min-height: auto;
  text-align-all: center;
}

.image{
  width: 100%;
  height:60%;
  display: block;
}
</style>