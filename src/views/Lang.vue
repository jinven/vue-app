<template>
    <div>
        <h2>Language</h2>
        <div>
            <h1>{{$t("message")}}</h1>
            <el-radio v-model="radio" @change="switchLang" label="1">中文</el-radio>
            <el-radio v-model="radio" v-on:change="switchLang" label="2">English</el-radio>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    h1{
        height: 50px;
        line-height: 50px;
    }
</style>
<script>
export default {
  data(){
    return {
        radio: window.localStorage.getItem('lang')=='en'?'2':'1'
    }
  },
  methods: {
    switchLang(to){
        if(to=='1'){
            this.$i18n.locale = 'zh';
        } else {
            this.$i18n.locale = 'en';
        }
        window.localStorage.setItem('lang', this.$i18n.locale);
        return;
    }
  },
}
</script>