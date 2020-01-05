<template>
    <div>
        <h2>Transfer</h2>

        <el-transfer v-model="value" :data="data"></el-transfer>

        
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="valueb"
    :data="datab">
  </el-transfer>

<p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
  <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div>
  <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
  <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value4"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div>

  <el-transfer
    v-model="valuec"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </el-transfer>
  
    </div>
</template>

<script>
export default {
    name: 'ElemeTransfer',
    data() {
      const generateData = () => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      const generateDatab = () => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        datab: generateDatab(),
        value: [1, 4],
        value4: [1],
        valueb: [],
        valuec: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },
    methods: {
      handleChange(value, direction, movedKeys) {
        this.$utils.log(value, direction, movedKeys);
      }
    }
}
</script>