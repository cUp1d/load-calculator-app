<template>
  <div class="result-page">
    <h2><span class="step">STEP3:</span> 装载结果</h2>
    <div element-loading-text="装载顺序计算中..." v-loading.fullscreen.lock="fullscreenLoading">
      <el-row>
        <el-col :span="8">
          <div id="canvas" style="margin-top: 1em">
            <img id="result-img" v-if="imgShow" src="../assets/output/模拟装载022103.jpg" width="500">
          </div>
        </el-col>
        <el-col :span="8" :offset="5">
          <el-card class="box-card">
            <div class="text item" v-for="line in text.split('\n')">
              {{ line }}<br>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-button style="margin-top: 1em;margin-left: 20%" @click="draw">装载动画展示</el-button>
        <el-button style="margin-top: 1em;" @click="prev">返回</el-button>
        <el-button style="margin-top: 1em;" @click="download">装载方案导出为.xls</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import TWEEN from 'tween.js';
import xls from '../assets/output/022103.xls'
import eventHub from "../plugins/eventHub";
import element from "../plugins/element";

export default {
  name: "Result",
  props: ['container', 'loads'],
  data() {
    return {
      text: '',
      imgShow:false,
      fullscreenLoading: true,
      container: [3.08,2.14, 1.63],
      loadOrders: [[0.0, 0.0, 0.0, 1.22, 0.86, 0.93], [0.0, 0.86, 0.0, 1.22, 0.93, 0.86], [1.22, 0.0, 0.0, 0.93, 0.86, 1.22], [1.22, 0.86, 0.0, 0.93, 0.86, 1.22], [2.15, 0.0, 0.0, 0.93, 0.86, 1.22], [2.15, 0.86, 0.0, 0.93, 0.86, 1.22], [0.0, 1.79, 0.0, 0.48, 0.35, 0.29], [0.48, 1.79, 0.0, 0.29, 0.35, 0.48], [0.77, 1.79, 0.0, 0.48, 0.35, 0.29], [1.25, 1.79, 0.0, 0.48, 0.35, 0.29], [0.0, 0.86, 0.86, 0.35, 0.48, 0.29], [0.35, 0.86, 0.86, 0.35, 0.48, 0.29], [1.73, 1.79, 0.0, 0.29, 0.35, 0.48], [2.02, 1.79, 0.0, 0.29, 0.35, 0.48], [0.7, 0.86, 0.86, 0.35, 0.48, 0.29], [0.0, 0.0, 0.93, 0.35, 0.48, 0.29], [2.31, 1.79, 0.0, 0.48, 0.35, 0.29], [0.0, 1.79, 0.29, 0.48, 0.35, 0.29], [2.79, 1.79, 0.0, 0.29, 0.35, 0.48], [0.35, 0.0, 0.93, 0.35, 0.48, 0.29], [0.48, 1.79, 0.29, 0.48, 0.35, 0.29], [0.96, 1.79, 0.29, 0.48, 0.35, 0.29], [1.44, 1.79, 0.29, 0.48, 0.35, 0.29], [0.48, 1.79, 0.48, 0.29, 0.35, 0.48], [0.7, 0.0, 0.93, 0.35, 0.48, 0.29], [0.77, 1.79, 0.48, 0.29, 0.35, 0.48], [0.0, 1.34, 0.86, 0.34, 0.38, 0.52], [1.22, 0.0, 1.22, 0.34, 0.52, 0.38], [1.06, 1.79, 0.48, 0.38, 0.34, 0.52], [0.34, 1.34, 0.86, 0.52, 0.38, 0.34], [1.22, 0.52, 1.22, 0.34, 0.52, 0.38], [0.86, 1.34, 0.86, 0.34, 0.38, 0.52], [0.0, 0.48, 0.93, 0.52, 0.38, 0.34], [0.0, 1.79, 0.58, 0.52, 0.34, 0.38], [0.52, 1.79, 0.58, 0.38, 0.34, 0.52], [1.56, 0.0, 1.22, 0.34, 0.52, 0.38], [1.22, 1.04, 1.22, 0.38, 0.52, 0.34], [0.52, 0.48, 0.93, 0.34, 0.38, 0.52], [0.9, 1.79, 0.58, 0.52, 0.34, 0.38], [1.42, 1.79, 0.58, 0.38, 0.34, 0.52], [0.0, 0.86, 1.15, 0.52, 0.38, 0.34], [1.56, 0.52, 1.22, 0.34, 0.52, 0.38], [1.9, 0.0, 1.22, 0.34, 0.52, 0.38], [1.6, 1.04, 1.22, 0.34, 0.52, 0.38], [1.9, 0.52, 1.22, 0.34, 0.52, 0.38], [0.48, 1.79, 0.96, 0.52, 0.34, 0.38], [0.52, 0.86, 1.15, 0.52, 0.38, 0.34], [0.86, 0.48, 0.93, 0.34, 0.38, 0.52], [2.24, 0.0, 1.22, 0.38, 0.52, 0.34], [0.34, 1.34, 1.2, 0.52, 0.38, 0.34], [0.0, 0.0, 1.22, 0.52, 0.38, 0.34], [0.0, 1.79, 0.96, 0.38, 0.34, 0.52], [0.38, 1.79, 0.96, 0.52, 0.34, 0.38], [1.94, 1.04, 1.22, 0.34, 0.52, 0.38], [1.06, 1.79, 1.0, 0.38, 0.34, 0.52], [0.52, 1.79, 1.1, 0.38, 0.34, 0.52], [0.9, 1.79, 1.1, 0.38, 0.34, 0.52], [2.24, 0.52, 1.22, 0.38, 0.52, 0.34], [2.62, 0.0, 1.22, 0.38, 0.52, 0.34], [2.28, 1.04, 1.22, 0.38, 0.52, 0.34], [0.52, 0.0, 1.22, 0.52, 0.38, 0.34], [2.62, 0.52, 1.22, 0.38, 0.52, 0.34], [0.0, 0.48, 1.27, 0.52, 0.38, 0.34], [2.66, 1.04, 1.22, 0.34, 0.52, 0.38], [0.0, 0.0, 0.0, 0.86, 1.22, 0.93], [0.0, 1.22, 0.0, 0.48, 0.29, 0.35], [0.86, 0.0, 0.0, 0.29, 0.35, 0.48], [0.0, 1.51, 0.0, 0.29, 0.48, 0.35], [0.86, 0.35, 0.0, 0.48, 0.35, 0.29], [1.15, 0.0, 0.0, 0.29, 0.35, 0.48], [0.29, 1.51, 0.0, 0.48, 0.35, 0.29], [0.48, 1.22, 0.0, 0.48, 0.29, 0.35], [0.86, 0.7, 0.0, 0.35, 0.29, 0.48], [1.34, 0.35, 0.0, 0.48, 0.35, 0.29], [1.44, 0.0, 0.0, 0.29, 0.35, 0.48], [0.77, 1.51, 0.0, 0.48, 0.29, 0.35], [0.96, 1.22, 0.0, 0.35, 0.29, 0.48], [1.21, 0.7, 0.0, 0.35, 0.29, 0.48], [1.82, 0.35, 0.0, 0.48, 0.29, 0.35], [1.73, 0.0, 0.0, 0.29, 0.35, 0.48], [1.25, 1.51, 0.0, 0.35, 0.29, 0.48], [2.02, 0.0, 0.0, 0.29, 0.35, 0.48], [1.31, 1.22, 0.0, 0.35, 0.29, 0.48], [2.31, 0.0, 0.0, 0.29, 0.35, 0.48], [0.0, 1.51, 0.35, 0.29, 0.48, 0.35], [1.56, 0.7, 0.0, 0.35, 0.29, 0.48], [2.6, 0.0, 0.0, 0.48, 0.35, 0.29], [2.3, 0.35, 0.0, 0.48, 0.29, 0.35], [1.6, 1.51, 0.0, 0.35, 0.29, 0.48], [0.86, 0.35, 0.29, 0.29, 0.35, 0.48], [0.0, 0.0, 0.93, 0.35, 0.48, 0.29], [0.29, 1.51, 0.29, 0.29, 0.35, 0.48], [0.0, 1.51, 0.7, 0.29, 0.48, 0.35], [2.6, 0.0, 0.29, 0.29, 0.35, 0.48], [1.15, 0.35, 0.29, 0.29, 0.35, 0.48], [0.86, 0.0, 0.48, 0.48, 0.35, 0.29], [1.66, 1.22, 0.0, 0.48, 0.29, 0.35], [1.91, 0.7, 0.0, 0.35, 0.29, 0.48], [1.95, 1.51, 0.0, 0.35, 0.29, 0.48], [1.44, 0.35, 0.29, 0.29, 0.35, 0.48], [0.0, 0.48, 0.93, 0.29, 0.48, 0.35], [2.14, 1.22, 0.0, 0.35, 0.29, 0.48], [2.26, 0.7, 0.0, 0.48, 0.29, 0.35], [1.34, 0.0, 0.48, 0.29, 0.35, 0.48], [0.35, 0.0, 0.93, 0.29, 0.48, 0.35], [2.3, 1.51, 0.0, 0.35, 0.29, 0.48], [2.49, 1.22, 0.0, 0.48, 0.29, 0.35], [1.63, 0.0, 0.48, 0.29, 0.35, 0.48], [0.29, 0.48, 0.93, 0.29, 0.48, 0.35], [0.0, 1.22, 0.35, 0.48, 0.29, 0.35], [2.65, 1.51, 0.0, 0.35, 0.29, 0.48], [0.77, 1.51, 0.35, 0.35, 0.29, 0.48], [1.92, 0.0, 0.48, 0.52, 0.34, 0.38], [0.86, 0.35, 0.77, 0.38, 0.34, 0.52], [0.86, 0.0, 0.77, 0.38, 0.34, 0.52], [1.92, 0.0, 0.86, 0.52, 0.34, 0.38], [1.24, 0.35, 0.77, 0.38, 0.34, 0.52], [1.24, 0.0, 0.77, 0.38, 0.34, 0.52], [1.34, 0.0, 0.96, 0.38, 0.34, 0.52], [0.0, 0.48, 1.28, 0.52, 0.38, 0.34], [2.78, 0.35, 0.0, 0.12, 0.25, 0.12], [0.0, 1.99, 0.0, 0.25, 0.12, 0.12], [2.74, 0.7, 0.0, 0.12, 0.25, 0.12], [0.29, 1.86, 0.0, 0.12, 0.12, 0.25], [0.86, 0.99, 0.0, 0.25, 0.12, 0.12], [0.25, 1.99, 0.0, 0.25, 0.12, 0.12], [2.9, 0.35, 0.0, 0.12, 0.12, 0.25], [2.86, 0.7, 0.0, 0.12, 0.25, 0.12], [0.41, 1.86, 0.0, 0.12, 0.12, 0.25], [1.11, 0.99, 0.0, 0.25, 0.12, 0.12], [0.0, 0.0, 0.0, 0.34, 0.38, 0.52], [0.0, 0.38, 0.0, 0.52, 0.34, 0.38], [0.34, 0.0, 0.0, 0.34, 0.38, 0.52], [0.0, 0.72, 0.0, 0.38, 0.34, 0.52], [0.0, 1.06, 0.0, 0.38, 0.52, 0.34], [0.68, 0.0, 0.0, 0.34, 0.38, 0.52], [0.38, 0.72, 0.0, 0.34, 0.38, 0.52], [0.0, 1.58, 0.0, 0.34, 0.38, 0.52], [1.02, 0.0, 0.0, 0.34, 0.38, 0.52], [0.38, 1.1, 0.0, 0.34, 0.38, 0.52], [0.72, 0.72, 0.0, 0.34, 0.52, 0.38], [1.06, 0.72, 0.0, 0.34, 0.52, 0.38], [0.34, 1.58, 0.0, 0.34, 0.38, 0.52], [0.52, 0.38, 0.0, 0.52, 0.34, 0.38], [1.36, 0.0, 0.0, 0.38, 0.34, 0.52], [1.4, 0.72, 0.0, 0.34, 0.38, 0.52], [0.68, 1.58, 0.0, 0.52, 0.38, 0.34], [1.04, 0.38, 0.0, 0.38, 0.34, 0.52], [1.74, 0.0, 0.0, 0.34, 0.38, 0.52], [1.2, 1.58, 0.0, 0.52, 0.38, 0.34], [1.42, 0.38, 0.0, 0.38, 0.34, 0.52], [2.08, 0.0, 0.0, 0.38, 0.34, 0.52], [1.72, 1.58, 0.0, 0.52, 0.38, 0.34], [2.24, 1.58, 0.0, 0.52, 0.38, 0.34], [1.8, 0.38, 0.0, 0.52, 0.34, 0.38], [0.0, 1.06, 0.34, 0.34, 0.38, 0.52], [0.72, 0.72, 0.38, 0.38, 0.52, 0.34], [0.68, 1.58, 0.34, 0.34, 0.38, 0.52], [1.02, 1.58, 0.34, 0.52, 0.38, 0.34], [1.54, 1.58, 0.34, 0.34, 0.38, 0.52], [2.46, 0.0, 0.0, 0.38, 0.34, 0.52], [1.88, 1.58, 0.34, 0.34, 0.38, 0.52], [2.22, 1.58, 0.34, 0.34, 0.38, 0.52], [2.32, 0.38, 0.0, 0.52, 0.34, 0.38], [0.0, 0.0, 0.52, 0.34, 0.38, 0.52], [0.38, 0.72, 0.52, 0.34, 0.38, 0.52], [0.0, 0.38, 0.38, 0.38, 0.34, 0.52], [0.38, 0.38, 0.38, 0.38, 0.34, 0.52], [0.0, 1.58, 0.52, 0.34, 0.38, 0.52], [1.4, 0.72, 0.52, 0.34, 0.38, 0.52], [0.72, 0.72, 0.72, 0.34, 0.52, 0.38], [0.76, 0.38, 0.38, 0.52, 0.34, 0.38], [1.28, 0.38, 0.38, 0.52, 0.34, 0.38], [0.34, 0.0, 0.52, 0.34, 0.38, 0.52], [0.0, 0.72, 0.52, 0.38, 0.34, 0.52], [1.36, 0.0, 0.52, 0.38, 0.34, 0.52], [0.38, 1.1, 0.52, 0.34, 0.38, 0.52], [1.04, 0.38, 0.52, 0.52, 0.34, 0.38], [0.68, 0.0, 0.52, 0.38, 0.34, 0.52], [1.06, 0.0, 0.52, 0.38, 0.34, 0.52], [1.44, 0.0, 0.52, 0.52, 0.34, 0.38], [1.02, 1.58, 0.68, 0.52, 0.34, 0.38], [0.0, 0.0, 1.04, 0.34, 0.52, 0.38], [0.76, 0.38, 0.76, 0.52, 0.34, 0.38], [1.96, 0.0, 0.52, 0.38, 0.34, 0.52], [1.28, 0.38, 0.76, 0.38, 0.34, 0.52], [0.72, 0.72, 1.1, 0.34, 0.52, 0.38], [0.68, 1.58, 0.86, 0.38, 0.34, 0.52], [1.06, 1.58, 0.86, 0.38, 0.34, 0.52], [0.38, 0.72, 1.04, 0.52, 0.38, 0.34], [0.34, 1.58, 0.52, 0.34, 0.38, 0.52], [1.44, 1.58, 0.86, 0.52, 0.34, 0.38], [0.0, 0.38, 0.9, 0.52, 0.34, 0.38], [0.0, 1.06, 0.86, 0.34, 0.38, 0.52], [0.34, 0.0, 1.04, 0.34, 0.38, 0.52], [1.04, 0.38, 0.9, 0.38, 0.34, 0.52], [1.74, 0.38, 0.0, 0.12, 0.25, 0.12], [2.76, 1.58, 0.0, 0.12, 0.25, 0.12], [2.84, 0.0, 0.0, 0.12, 0.25, 0.12], [0.0, 1.96, 0.0, 0.12, 0.12, 0.25], [0.72, 1.24, 0.0, 0.12, 0.12, 0.25], [1.4, 1.1, 0.0, 0.25, 0.12, 0.12], [1.86, 0.38, 0.0, 0.12, 0.25, 0.12], [2.88, 1.58, 0.0, 0.12, 0.25, 0.12], [2.84, 0.25, 0.0, 0.12, 0.25, 0.12], [2.76, 1.83, 0.0, 0.12, 0.12, 0.25], [2.96, 0.0, 0.0, 0.12, 0.12, 0.25], [0.12, 1.96, 0.0, 0.25, 0.12, 0.12], [0.0, 0.0, 0.0, 0.52, 0.38, 0.34], [0.0, 0.38, 0.0, 0.34, 0.52, 0.38], [0.52, 0.0, 0.0, 0.52, 0.38, 0.34], [0.0, 0.9, 0.0, 0.34, 0.38, 0.52], [0.34, 0.38, 0.0, 0.34, 0.52, 0.38], [1.04, 0.0, 0.0, 0.52, 0.38, 0.34], [0.0, 1.28, 0.0, 0.34, 0.52, 0.38], [0.34, 0.9, 0.0, 0.52, 0.38, 0.34], [0.68, 0.38, 0.0, 0.34, 0.52, 0.38], [1.56, 0.0, 0.0, 0.34, 0.38, 0.52], [0.34, 1.28, 0.0, 0.38, 0.52, 0.34], [0.86, 0.9, 0.0, 0.34, 0.38, 0.52], [0.0, 1.8, 0.0, 0.38, 0.34, 0.52], [1.02, 0.38, 0.0, 0.38, 0.52, 0.34], [1.9, 0.0, 0.0, 0.38, 0.34, 0.52], [0.72, 1.28, 0.0, 0.52, 0.38, 0.34], [1.2, 0.9, 0.0, 0.52, 0.34, 0.38], [1.4, 0.38, 0.0, 0.34, 0.38, 0.52], [1.24, 1.28, 0.0, 0.52, 0.38, 0.34], [0.38, 1.8, 0.0, 0.38, 0.34, 0.52], [2.28, 0.0, 0.0, 0.38, 0.34, 0.52], [1.72, 0.9, 0.0, 0.38, 0.34, 0.52], [1.74, 0.38, 0.0, 0.34, 0.38, 0.52], [1.76, 1.28, 0.0, 0.34, 0.38, 0.52], [0.76, 1.8, 0.0, 0.52, 0.34, 0.38], [2.66, 0.0, 0.0, 0.38, 0.34, 0.52], [0.34, 1.28, 0.34, 0.38, 0.52, 0.34], [2.1, 0.9, 0.0, 0.52, 0.34, 0.38], [2.08, 0.38, 0.0, 0.38, 0.34, 0.52], [2.1, 1.28, 0.0, 0.52, 0.34, 0.38], [0.0, 0.0, 0.34, 0.34, 0.38, 0.52], [1.28, 1.8, 0.0, 0.52, 0.34, 0.38], [0.34, 0.9, 0.34, 0.34, 0.38, 0.52], [1.02, 0.38, 0.34, 0.34, 0.38, 0.52], [2.46, 0.38, 0.0, 0.52, 0.34, 0.38], [2.62, 0.9, 0.0, 0.38, 0.34, 0.52], [2.62, 1.28, 0.0, 0.38, 0.34, 0.52], [0.0, 0.38, 0.38, 0.34, 0.52, 0.38], [0.72, 1.28, 0.34, 0.34, 0.38, 0.52], [0.0, 1.28, 0.38, 0.34, 0.52, 0.38], [0.34, 0.0, 0.34, 0.34, 0.38, 0.52], [1.8, 1.8, 0.0, 0.38, 0.34, 0.52], [0.34, 0.38, 0.38, 0.38, 0.52, 0.34], [1.06, 1.28, 0.34, 0.34, 0.38, 0.52], [0.68, 0.0, 0.34, 0.34, 0.38, 0.52], [1.4, 1.28, 0.34, 0.34, 0.38, 0.52], [2.18, 1.8, 0.0, 0.52, 0.34, 0.38], [0.34, 1.28, 0.68, 0.34, 0.52, 0.38], [0.34, 0.38, 0.72, 0.34, 0.52, 0.38], [0.0, 0.38, 0.76, 0.34, 0.52, 0.38], [1.02, 0.0, 0.34, 0.52, 0.38, 0.34], [2.7, 1.8, 0.0, 0.38, 0.34, 0.52], [0.0, 0.9, 0.76, 0.34, 0.52, 0.38], [1.2, 0.9, 0.38, 0.38, 0.34, 0.52], [0.76, 1.8, 0.38, 0.38, 0.34, 0.52], [0.0, 0.9, 0.52, 0.34, 0.38, 0.52], [1.4, 0.38, 0.52, 0.52, 0.38, 0.34], [1.56, 0.0, 0.52, 0.34, 0.38, 0.52], [0.34, 1.28, 1.06, 0.34, 0.52, 0.38], [1.76, 1.28, 0.52, 0.34, 0.38, 0.52], [2.1, 1.28, 0.38, 0.52, 0.34, 0.38], [0.34, 0.9, 0.52, 0.34, 0.38, 0.52], [2.46, 0.38, 0.38, 0.38, 0.34, 0.52], [1.58, 0.9, 0.38, 0.52, 0.34, 0.38], [1.02, 0.0, 0.68, 0.34, 0.38, 0.52], [0.34, 0.38, 1.1, 0.34, 0.52, 0.38], [1.14, 1.8, 0.38, 0.38, 0.34, 0.52], [0.0, 0.38, 1.14, 0.34, 0.52, 0.38], [1.52, 1.8, 0.38, 0.38, 0.34, 0.52], [1.9, 1.8, 0.38, 0.38, 0.34, 0.52], [0.0, 0.9, 1.14, 0.34, 0.52, 0.38], [0.0, 1.8, 0.52, 0.52, 0.34, 0.38], [0.0, 0.0, 0.86, 0.52, 0.38, 0.34], [1.02, 0.38, 0.86, 0.52, 0.38, 0.34], [1.9, 0.0, 0.52, 0.38, 0.34, 0.52], [1.72, 0.9, 0.52, 0.38, 0.34, 0.52], [2.08, 0.38, 0.52, 0.38, 0.34, 0.52], [2.62, 1.28, 0.52, 0.38, 0.34, 0.52], [0.72, 1.66, 0.0, 0.12, 0.12, 0.25], [1.4, 0.76, 0.0, 0.25, 0.12, 0.12], [0.0, 0.0, 0.0, 0.34, 0.52, 0.38], [0.0, 0.52, 0.0, 0.34, 0.38, 0.52], [0.34, 0.0, 0.0, 0.34, 0.38, 0.52], [0.0, 0.9, 0.0, 0.52, 0.38, 0.34], [0.34, 0.38, 0.0, 0.34, 0.38, 0.52], [0.68, 0.0, 0.0, 0.52, 0.38, 0.34], [0.0, 1.28, 0.0, 0.34, 0.38, 0.52], [0.52, 0.9, 0.0, 0.52, 0.38, 0.34], [0.34, 0.76, 0.0, 0.38, 0.34, 0.52], [0.68, 0.38, 0.0, 0.52, 0.38, 0.34], [1.2, 0.0, 0.0, 0.34, 0.52, 0.38], [0.0, 1.66, 0.0, 0.52, 0.34, 0.38], [1.04, 0.9, 0.0, 0.38, 0.34, 0.52], [1.54, 0.0, 0.0, 0.34, 0.38, 0.52], [0.68, 0.0, 0.34, 0.34, 0.52, 0.38], [0.0, 0.0, 0.38, 0.38, 0.52, 0.34], [1.88, 0.0, 0.0, 0.52, 0.38, 0.34], [2.4, 0.0, 0.0, 0.52, 0.38, 0.34], [0.0, 0.52, 0.52, 0.34, 0.52, 0.38], [0.72, 0.76, 0.0, 0.38, 0.34, 0.52], [0.0, 0.9, 0.34, 0.52, 0.38, 0.34], [1.88, 0.0, 0.34, 0.34, 0.38, 0.52], [0.0, 0.0, 0.72, 0.38, 0.52, 0.34], [0.52, 0.9, 0.34, 0.34, 0.38, 0.52], [2.22, 0.0, 0.34, 0.34, 0.38, 0.52], [2.56, 0.0, 0.34, 0.34, 0.38, 0.52], [0.0, 0.0, 1.06, 0.38, 0.52, 0.34], [0.34, 0.0, 0.52, 0.34, 0.38, 0.52], [1.54, 0.0, 0.52, 0.34, 0.38, 0.52], [0.34, 0.38, 0.52, 0.34, 0.38, 0.52], [0.68, 0.0, 0.72, 0.34, 0.52, 0.38], [0.0, 0.9, 0.68, 0.34, 0.38, 0.52], [0.52, 1.66, 0.0, 0.52, 0.34, 0.38], [1.04, 1.24, 0.0, 0.34, 0.38, 0.52], [1.38, 1.24, 0.0, 0.34, 0.38, 0.52], [1.72, 1.24, 0.0, 0.34, 0.38, 0.52], [1.42, 0.9, 0.0, 0.52, 0.34, 0.38], [1.1, 0.76, 0.0, 0.38, 0.34, 0.52], [2.06, 1.24, 0.0, 0.34, 0.38, 0.52], [1.94, 0.9, 0.0, 0.38, 0.34, 0.52], [2.4, 1.24, 0.0, 0.52, 0.38, 0.34], [1.48, 0.76, 0.0, 0.38, 0.34, 0.52], [2.32, 0.9, 0.0, 0.52, 0.34, 0.38], [1.86, 0.76, 0.0, 0.52, 0.34, 0.38], [2.38, 0.76, 0.0, 0.52, 0.34, 0.38], [2.4, 1.24, 0.34, 0.34, 0.38, 0.52], [1.04, 1.24, 0.52, 0.34, 0.38, 0.52], [0.0, 1.66, 0.38, 0.38, 0.34, 0.52], [0.0, 0.52, 0.9, 0.34, 0.52, 0.38], [1.42, 0.9, 0.38, 0.38, 0.34, 0.52], [1.86, 0.76, 0.38, 0.52, 0.34, 0.38], [0.38, 1.66, 0.38, 0.38, 0.34, 0.52], [1.38, 1.24, 0.52, 0.34, 0.38, 0.52], [0.68, 0.0, 1.1, 0.34, 0.52, 0.38], [1.8, 0.9, 0.38, 0.38, 0.34, 0.52], [2.38, 0.76, 0.38, 0.52, 0.34, 0.38], [1.72, 1.24, 0.52, 0.52, 0.38, 0.34], [2.92, 0.0, 0.0, 0.12, 0.25, 0.12], [2.92, 1.24, 0.0, 0.12, 0.25, 0.12], [2.84, 0.9, 0.0, 0.12, 0.25, 0.12], [0.34, 1.1, 0.0, 0.25, 0.12, 0.12], [1.2, 0.52, 0.0, 0.25, 0.12, 0.12], [2.9, 0.76, 0.0, 0.12, 0.25, 0.12], [0.0, 2.0, 0.0, 0.25, 0.12, 0.12], [1.54, 0.38, 0.0, 0.25, 0.12, 0.12], [2.96, 0.9, 0.0, 0.12, 0.25, 0.12], [0.0, 0.0, 0.0, 0.38, 0.52, 0.34], [0.0, 0.52, 0.0, 0.38, 0.52, 0.34], [0.38, 0.0, 0.0, 0.52, 0.38, 0.34], [0.0, 1.04, 0.0, 0.34, 0.38, 0.52], [0.38, 0.38, 0.0, 0.34, 0.52, 0.38], [0.0, 1.42, 0.0, 0.38, 0.52, 0.34], [0.9, 0.0, 0.0, 0.34, 0.38, 0.52], [0.38, 0.9, 0.0, 0.38, 0.52, 0.34], [0.34, 1.04, 0.0, 0.38, 0.34, 0.52], [0.72, 0.38, 0.0, 0.52, 0.38, 0.34], [1.24, 0.0, 0.0, 0.34, 0.38, 0.52], [0.76, 0.9, 0.0, 0.52, 0.38, 0.34], [0.72, 0.76, 0.0, 0.52, 0.38, 0.34], [1.24, 0.38, 0.0, 0.34, 0.52, 0.38], [1.58, 0.0, 0.0, 0.34, 0.38, 0.52], [1.28, 0.9, 0.0, 0.52, 0.38, 0.34], [1.58, 0.38, 0.0, 0.52, 0.38, 0.34], [1.92, 0.0, 0.0, 0.34, 0.38, 0.52], [1.8, 0.9, 0.0, 0.34, 0.38, 0.52], [2.1, 0.38, 0.0, 0.34, 0.38, 0.52], [0.0, 0.0, 0.34, 0.38, 0.52, 0.34], [2.26, 0.0, 0.0, 0.52, 0.38, 0.34], [2.14, 0.9, 0.0, 0.52, 0.38, 0.34], [2.44, 0.38, 0.0, 0.34, 0.38, 0.52], [0.38, 0.0, 0.34, 0.52, 0.38, 0.34], [2.66, 0.9, 0.0, 0.34, 0.38, 0.52], [0.38, 0.9, 0.34, 0.34, 0.52, 0.38], [0.72, 0.38, 0.34, 0.52, 0.34, 0.38], [0.0, 0.52, 0.34, 0.34, 0.52, 0.38], [0.76, 0.9, 0.34, 0.38, 0.34, 0.52], [1.58, 0.38, 0.34, 0.52, 0.34, 0.38], [0.9, 0.0, 0.34, 0.52, 0.38, 0.34], [0.0, 1.04, 0.34, 0.38, 0.52, 0.34], [0.72, 0.72, 0.34, 0.38, 0.34, 0.52], [0.38, 0.38, 0.38, 0.34, 0.38, 0.52], [0.72, 0.38, 0.38, 0.34, 0.38, 0.52], [1.14, 0.9, 0.34, 0.52, 0.34, 0.38], [1.66, 0.9, 0.34, 0.52, 0.34, 0.38], [0.0, 0.0, 0.68, 0.38, 0.52, 0.34], [0.9, 0.0, 0.52, 0.52, 0.38, 0.34], [0.0, 0.52, 0.68, 0.34, 0.52, 0.38], [0.0, 1.04, 0.52, 0.34, 0.38, 0.52], [1.8, 0.9, 0.52, 0.52, 0.38, 0.34], [0.38, 0.9, 0.72, 0.34, 0.52, 0.38], [0.0, 0.52, 0.72, 0.34, 0.52, 0.38], [2.1, 0.38, 0.52, 0.34, 0.38, 0.52], [0.0, 0.0, 1.02, 0.34, 0.52, 0.38], [1.42, 0.0, 0.52, 0.34, 0.38, 0.52], [0.38, 0.9, 1.1, 0.34, 0.52, 0.38], [2.44, 0.38, 0.52, 0.34, 0.38, 0.52], [0.0, 0.52, 1.1, 0.34, 0.52, 0.38], [0.0, 0.52, 1.48, 0.34, 0.52, 0.38], [2.78, 0.0, 0.0, 0.12, 0.25, 0.12], [2.78, 0.38, 0.0, 0.12, 0.25, 0.12], [0.0, 1.94, 0.0, 0.12, 0.12, 0.25], [0.38, 1.42, 0.0, 0.25, 0.12, 0.12], [0.76, 1.28, 0.0, 0.25, 0.12, 0.12], [1.24, 0.9, 0.0, 0.25, 0.12, 0.12], [1.58, 0.76, 0.0, 0.25, 0.12, 0.12], [2.9, 0.0, 0.0, 0.12, 0.25, 0.12], [2.9, 0.38, 0.0, 0.12, 0.25, 0.12], [0.0, 0.0, 0.0, 0.34, 0.52, 0.38], [0.0, 0.52, 0.0, 0.34, 0.52, 0.38], [0.34, 0.0, 0.0, 0.34, 0.52, 0.38], [0.0, 1.04, 0.0, 0.34, 0.52, 0.38], [0.34, 0.52, 0.0, 0.38, 0.34, 0.52], [0.68, 0.0, 0.0, 0.38, 0.34, 0.52], [0.0, 1.56, 0.0, 0.38, 0.34, 0.52], [0.34, 0.86, 0.0, 0.34, 0.38, 0.52], [0.72, 0.52, 0.0, 0.38, 0.34, 0.52], [0.68, 0.34, 0.0, 0.34, 0.52, 0.38], [1.02, 0.34, 0.0, 0.52, 0.38, 0.34], [1.06, 0.0, 0.0, 0.12, 0.25, 0.12], [0.38, 1.56, 0.0, 0.12, 0.25, 0.12], [0.0, 1.9, 0.0, 0.25, 0.12, 0.12], [0.34, 1.24, 0.0, 0.25, 0.12, 0.12], [1.1, 0.52, 0.0, 0.12, 0.25, 0.12], [1.02, 0.72, 0.0, 0.25, 0.12, 0.12], [1.54, 0.34, 0.0, 0.12, 0.25, 0.12], [1.18, 0.0, 0.0, 0.12, 0.25, 0.12]]
    }
  },
  mounted() {
    setTimeout(()=>{
      this.fullscreenLoading=false
      this.text = `总共: 434 包裹.
          装入: 434 包裹. (100%)

          包括:
          货物1 - 7   个 (100%) 货物2 - 67  个 (100%)
          货物3 - 310 个 (100%) 货物4 - 50  个 (100%)

          货物体积: 31.228 m3 (87.33% 集装器总容积)
          货物重量: 4844.37 kg (66% 集装器设计载荷)
          `
      this.imgShow=true;
    }, 5000)
  },
  methods: {
    draw() {
      THREE.Object3D.DefaultUp = new THREE.Vector3(0,0,1);

      const [l, w, h] = this.container;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xf0f0f0 );
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.set( 0, 250, 1000 );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth/3, window.innerHeight / 2.5 );

      let resultImage=document.querySelector('#result-img');
      document.querySelector('#canvas').removeChild(resultImage);
      document.querySelector('#canvas').appendChild(renderer.domElement);

      const axesHelper = new THREE.AxesHelper( 10 );
      scene.add(axesHelper)

      camera.position.set(4, 4, 2);
      camera.lookAt(scene.position)

      const geometry = new THREE.BoxGeometry(l, w, h);
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
      const cube = new THREE.Mesh( geometry, material );

      cube.position.x += l/2;
      cube.position.y += w/2;
      cube.position.z += h/2;

      scene.add( cube );

      for (let i =0;i<this.loadOrders.length;i++) {
        console.log(i, this.loadOrders.length)
        setTimeout(()=>{
          this.place(scene, this.loadOrders[i])
        }, 500*i)
      }

      // camera.position.z = 5;
      function animate() {
        requestAnimationFrame( animate );
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        TWEEN.update()
        renderer.render( scene, camera );
      }
      animate();
    },
    place(scene, dimensions) {
      const [x,y,z,l,w,h] = dimensions;

      const geometry = new THREE.BoxGeometry(l,	w,	h);
      const color = (this.randomInt() << 16) | (this.randomInt() << 8) | (this.randomInt());
      const material = new THREE.MeshBasicMaterial( { color: color } );
      const cube = new THREE.Mesh( geometry, material );

      cube.position.x = x + l/2;
      cube.position.y = y+w/2;
      cube.position.z = z+h/2 + 3;

      const tween = new TWEEN.Tween(cube.position).to(cube.position.clone().setZ(h/2+z), 2000)
      tween.start()
      scene.add(cube)
    },
    randomInt() {
      return Math.floor(Math.random() * 256)
    },
    download() {
      window.open(xls)
    },
    prev() {
      eventHub.$emit("prev")
    }
  }
};
</script>

<style scoped>
div.result-page{
  margin-left: 15%;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 360px;
}
</style>