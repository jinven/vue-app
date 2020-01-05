<template>
    <div>
        <h2>Switch</h2>

<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<el-switch
  v-model="value1"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>

<el-tooltip :content="'Switch value: ' + value" placement="top">
  <el-switch
    v-model="valuea"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<el-switch
  v-model="value1"
  disabled>
</el-switch>
<el-switch
  v-model="value2"
  disabled>
</el-switch>



    </div>
</template>

<script>
export default {
    name: 'ElemeSwitch',
    data() {
      return {
        value: true,
        valuea: '100',
        value1: true,
        value2: true,
      }
    }
}
</script>