<template>
    <div>
        <h2>InputNumber</h2>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>

        <el-input-number v-model="num" :disabled="true"></el-input-number>

        <el-input-number v-model="num5" :step="2"></el-input-number>

        <el-input-number v-model="num6" :step="2" step-strictly></el-input-number>

        <el-input-number v-model="num7" :precision="2" :step="0.1" :max="10"></el-input-number>

        <el-input-number v-model="num8"></el-input-number>
        <el-input-number size="medium" v-model="num9"></el-input-number>
        <el-input-number size="small" v-model="num10"></el-input-number>
        <el-input-number size="mini" v-model="num11"></el-input-number>

        <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div>
</template>

<script>
export default {
    name: 'ElemeInputNumber',
    data() {
      return {
        num: 1,
        num5: 5,
        num6: 2,
        num7: 1,
        num8: 1,
        num9: 1,
        num10: 1,
        num11: 1,
      };
    },
    methods: {
      handleChange(value) {
        this.$utils.log(value);
      }
    }
}
</script>