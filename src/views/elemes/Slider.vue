<template>
    <div>
        <h2>Slider</h2>

        <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>


<div class="block">
    <span class="demonstration">不显示间断点</span>
    <el-slider
      v-model="value1"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops>
    </el-slider>
  </div>


<div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
<div class="block">
    <el-slider
      v-model="valuea"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>

<div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>

 <div class="block">
    <el-slider
      v-model="valueb"
      range
      :marks="marks">
    </el-slider>
  </div>




    </div>
</template>

<script>
export default {
    name: 'ElemeSlider',
    data() {
      return {
        value: 0,
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        valuea: [4, 8],
        valueb: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
}
</script>