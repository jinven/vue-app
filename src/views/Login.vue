<template>
    <div>
        <h2>{{$t('Login')}}</h2>
        <form @submit.prevent="submit">
            <p>
                <span>{{$t('name')}}:</span>
                <input type="text" v-model="user.name" required>
            </p>
            <p>
                <span>{{$t('password')}}:</span>
                <input type="password" v-model="user.password" required>
            </p>
            <p v-if="message">
                <span></span>
                <b :class="clazz">{{message}}</b>
            </p>
            <p>
                <span></span>
                <el-button type="primary" native-type="submit">{{$t('submit')}}</el-button>
                <!-- <button type="submit"></button> -->
            </p>
            <p class="tips">
                <el-tag size="mini">admin</el-tag>
                <el-tag size="mini">123456</el-tag>
            </p>
        </form>
    </div>
</template>
<style lang="scss" scoped>
    form{
        margin:0 auto;
        width:350px;
        min-height:200px;
        border:1px solid #ccc;
        border-radius:3px;
        background-color:rgba(123, 98, 98, 0.3);
        span{
            display:inline-block;
            width:70px;
            padding-right:10px;
            height:30px;
            line-height: 30px;
            vertical-align: middle;
            text-align: right;
        }
        input{
            width:200px;
            padding: 2px 3px;
            border:1px solid #ddd;
            height:26px;
        }
        button{
            width:200px;
            border:1px solid #eee;
        }
        .tips{
            text-align: right;
            padding-right: 35px;
        }
        .el-tag--mini{
            text-align:center;
            padding:0 5px;
            margin:0 5px;
            text-align:center;
            width:55px;
        }
    }
    .success{
        color:green;
    }
    .error{
        color:red;
    }
</style>
<script>
// import store from '../store'
export default {
    data(){
        return {
            user: {
                name: '',
                password: ''
            },
            message: '',
            clazz: ''
        }
    },
    methods:{
        submit(){
            if(this.user.name!='admin' || this.user.password!='123456'){
                this.message='用户名或密码错误';
                this.clazz='error';
                return;
            }
            this.$utils.log('ok');
            this.$message({
                message: '登录成功',
                type: 'success'
            });
            this.message = '登录成功';
            this.clazz= 'success';
            window.localStorage.setItem("IsLogin", "true");
            // store.state.isLogin=true;
            this.$store.dispatch('userLogin',true);
            this.$router.push('/home');
        }
    },
    updated(){
        this.$utils.log(this.$attrs);
        this.$utils.log(this.$route.query);
        this.$utils.log(this.$route.params);
        this.$utils.log(this);
    },
    watch:{
        '$route':function(to, from){
            this.$utils.log(to, from);
            this.$utils.log('$route');
        }
    }
}
</script>