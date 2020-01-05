<template>
    <div>
        <h2>route</h2>
        <label><input type="checkbox"><span>A</span></label>
        <label><input type="checkbox"><span>B</span></label>
        <label><input type="checkbox"><span>C</span></label>
        <label><input type="checkbox"><span>D</span></label>
        <p></p>
        <button @click="gb">go back</button>
        <button @click="gf">go forward</button>

        <div>
            <h1>Route props</h1>
            <el-menu :default-active="path" background-color="rgba(84, 92, 100, .3)" text-color="#fff" active-text-color="#994bff" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/route"><router-link to="/route">/</router-link></el-menu-item>
                <el-menu-item index="/route/hello"><router-link to="/route/hello">/hello</router-link></el-menu-item>
                <el-menu-item index="/route/hello/you"><router-link to="/route/hello/you">/hello/you</router-link></el-menu-item>
                <el-menu-item index="/route/static"><router-link to="/route/static">/static</router-link></el-menu-item>
                <el-menu-item index="/route/dynamic/1"><router-link to="/route/dynamic/1">/dynamic/1</router-link></el-menu-item>
                <el-menu-item index="/route/attrs"><router-link to="/route/attrs">/attrs</router-link></el-menu-item>
            </el-menu>
            <router-view class="view" foo="123"></router-view>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .el-menu{
        .el-menu-item{
            float:unset !important;
        }
    }
    ul{
        list-style: none;
        margin:0;
        padding:0;
        li{
            display: inline-block;
            a{
                display: inline-block;
                padding:0 5px;
                min-width: 50px;
                &:hover{
                    color:red;
                }
            }
        }
    }
</style>
<script>
export default {
    computed:{
        path(){
            return this.$route.path;
        }
    },
    data(){
        return {
            activeIndex: '1',
        }
    },
    name: 'RT',
    methods:{
        gb(){
            this.$utils.log(this.$router);
            window.history.length>1?this.$router.go(-1) : this.$router.push('/');
        },
        gf(){
            this.$utils.log(this.$router);
            window.history.length>1?this.$router.go(1) : this.$router.push('/');
        },
        handleSelect(key, keyPath) {
            this.$utils.log(key, keyPath);
        }
    }
}
</script>