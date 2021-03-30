<template>
  <h1>STEP1: 集装箱型号选择</h1>
  <el-row :gutter="20" v-for="row in rows" :key="row">
    <el-col :span="8" v-for="col in row" :key="col">
      <el-card shadow="hover" :body-style="{ padding: '5px' ,height:'40vh'}">
        <div class="card-header"><span>{{ col.name }}</span></div>
        <img :src="col.image" class="image">
        <div style="padding: 14px;vertical-align: bottom">
        <div class="bottom">
            <el-button type="primary" class="button" @click="select(col.name)">选择</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
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
    }
  }
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