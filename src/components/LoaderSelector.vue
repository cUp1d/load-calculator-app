<template>
  <h2><span class="step">STEP1: </span>集装器型号选择</h2>
  <el-row>
    <el-select v-model="value" placeholder="请选择" @change="change">
      <el-option
          v-for="c in containers"
          :key="c.name"
          :label="c.name"
          :value="c.name">
      </el-option>
    </el-select>
  </el-row>
  <el-row>
    <el-image :src="image" :alt="value"></el-image>
  </el-row>
<!--  <el-row :gutter="20" v-for="row in rows" :key="row">-->
<!--    <el-col :span="8" v-for="col in row" :key="col">-->
<!--      <el-card shadow="hover" :body-style="{ padding: '5px' ,height:'40vh'}">-->
<!--        <div class="card-header"><span>{{ col.name }}</span></div>-->
<!--        <img :src="col.image" class="image">-->
<!--        <div style="padding: 14px;vertical-align: bottom">-->
<!--        <div class="bottom">-->
<!--            <el-button type="primary" class="button" @click="select(col.name)">选择</el-button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-card>-->
<!--    </el-col>-->
<!--  </el-row>-->
</template>

<script>
import AAU from "../assets/AAU.jpg";
import ALF from "../assets/ALF.jpg";
import AMA from "../assets/AMA.jpg";
import PAG from "../assets/PAG.jpg";
import PGA from "../assets/PGA.jpg";
import PLA from "../assets/PLA.jpg";

export default {
  name: "LoaderSelector",
  data() {
    return {
      value: 'PAG',
      image: PAG,
      imageMapping :{
        "AAU": AAU,
        "ALF": ALF,
        "AMA":AMA,
        "PAG":PAG,
        "PGA":PGA,
        "PLA":PLA,
      },
      containers:[
        {
          "name": "AAU",
          "image": AAU,
        },
        {
          "name": "ALF",
          "image": ALF,
        },
        {
          "name": "AMA",
          "image": AMA,
        },
        {
          "name": "PAG",
          "image": PAG,
        },
        {
          "name": "PGA",
          "image": PGA,
        },
        {
          "name": "PLA",
          "image": PLA,
        }
      ]
    }
  },
  computed: {
    rows() {
      let res =[];
      let temp = [];
      for (let [i, v] of this.containers.entries()) {
        if (temp.length === 3) {
          res.push(temp);
          temp = [v]
        } else {
          temp.push(v)
        }

        if (i === this.containers.length - 1) res.push(temp)
      }
      return res;
    }
  },
  methods:{
    select (name) {
      this.$parent.$emit("select-container", name);
    },
    change (val){
      this.image = this.imageMapping[val]
    }
  }
}
</script>

<style scoped>
.el-image{
  margin-top:60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>