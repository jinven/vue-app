<template>
    <div>
        <h2>Calendar</h2>
<el-calendar v-model="value">
</el-calendar>
<el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>

<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>

    </div>
</template>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
<script>
export default {
    name: 'ElemeCalendar',
    data() {
      return {
        value: new Date()
      }
    }
}
</script>