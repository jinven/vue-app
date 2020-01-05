<template>
    <div>
        <h2>Rate</h2>
        <div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">区分颜色</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>

<el-rate
  v-model="value"
  show-text>
</el-rate>

<el-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<el-rate
  v-model="valuea"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>

    </div>
</template>

<script>
export default {
    name: 'ElemeRate',
    data() {
      return {
        value: null,
        value1: null,
        value2: null,
        valuea: 3.7,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
}
</script>