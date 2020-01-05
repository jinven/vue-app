<template>
  <div id="app">
    <header>
      <el-tag type="success" size="mini" style="float:left;margin:5px">{{env}}</el-tag>
      <!-- <p :class="'success'" v-if="isLogin">{{$t('HasLogin')}}</p> -->
      <p v-if="!isLogin">{{$t('NotLogin')}}</p>
      <!-- <p v-if="isLogin"><a href="/logout" @click="logout">退出</a></p> -->
      <!-- <p v-if="isLogin"><router-link to="/logout" @click.native="logout">{{$t('Logout')}}</router-link></p> -->
        
      <p v-if="isLogin"><el-button type="danger" size="mini" @click="toLogout()">{{$t('Logout')}}</el-button></p>
      <el-select v-model="lang" size="mini" class="app-lang" @change="switchLang">
          <el-option v-for="l in langs" :key="l.id" :label="l.name" :value="l.id"></el-option>
      </el-select>
    </header>
    <div id="nav">
      <nav>
        <ul>
          <li v-for="m in menus" :key="m.name" v-show="m.login == isLogin"><router-link :to="m.to">{{$t(m.name)}}</router-link></li>
        </ul>
      </nav>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <keep-alive include="RT" v-if="!$route.meta.keepAlive">
      <router-view/>
    </keep-alive>
    <p v-if="invalidRoute">404</p>
  </div>
</template>

<style lang="scss">
html{
  min-height:100%;
  // background-image:linear-gradient(45deg, rgba(165, 87, 255, 0.3), rgba(236, 255, 134, 0.3)), linear-gradient(-45deg, rgba(255, 93, 93, 0.3), rgba(71, 204, 255, 0.3));
  background-image:linear-gradient(to bottom,transparent 0%,hsla(0, 0%, 100%, 0.3) 100%),linear-gradient(to right,rgba(255, 0, 0, 0.3) 0%,rgba(255, 255, 0, 0.3) 16%,rgba(0, 255, 0, 0.3) 33%,rgba(0, 255, 255, 0.3) 50%,rgba(0, 0, 255, 0.3) 66%,rgba(255, 0, 255, 0.3) 83%,rgba(255, 0, 0, 0.3) 100%);
}
header{
  height:30px;
  line-height: 30px;
  background-color:rgba(0, 40, 249, 0.3);
  text-align: right;
  p{
    display: inline-block;
    margin:0;
    padding:0 10px 0 0;
    color:#eee;
    font-size:14px;
    .el-button{
      padding: 3px 15px;
      border:1px solid #eee;
    }
  }
  .success{
    color:#a2ffa2;
    font-weight: bold;
  }
  .app-lang{
    margin-right:10px;
    .el-input{
      width:90px;
      .el-input__inner{
        background-color:rgba(95, 91, 91, 0.5);
        height:22px;
        color:#eee;
      }
    }
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav ul{
  margin:0;
  padding:0;
  min-height:40px;
  width:100%;
  line-height:40px;
  list-style: none;
  background-color:rgba(255, 255, 255, 0.2);
  border-bottom:1px solid rgba(175, 175, 175, 0.1);
  overflow:auto;
  li{
    float:left;
  }
  a {
    display:inline-block;
    padding:0 10px;
    min-width:80px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: rgb(216, 60, 111);
    }
    &:hover{
      background-color:rgba(158, 158, 158, 0.3);
    }
  }
}
</style>

<script>
import routes from './router'
import Dynamic from './components/Dynamic.vue'
import {mapState, mapMutations} from 'vuex'
// import store from './store'
export default {
  name: 'App',
  data(){
    return {
      lang:window.localStorage.getItem('lang'),
      activeDate : Date.now(),
      langs:[
        {id:'en',label:'en',name:'English'},
        {id:'zh',label:'zh',name:'中文'},
      ],
      menus:[
        {to:'/',name:'Login', login:false},
        {to:'/home',name:'Home', login:true},
        {to:'/lang',name:'Language', login:true},
        {to:'/eleme',name:'ElementUI', login:true},
        {to:'/about',name:'About', login:false},
        {to:'/keepalive',name:'KeepAlive', login:true},
        {to:'/route',name:'Route', login:true},
        {to:'/axios',name:'Axios', login:true},
        {to:'/redirect',name:'Redirect', login:true},
        {to:'/crypto',name:'Crypto', login:true},
        {to:'/emit',name:'$emit-props', login:true},
        {to:'/socket',name:'socket', login:true},
        {to:'/dynamic',name:'Dynamic', login:true},
      ]
    }
  },
  methods:{
    toLogout(){
      this.$router.push('/logout');
    },
    ...mapMutations(['logout']),
    // logout(){
    //   this.$store.commit('logout')
    //   return
    // }
    switchLang(to){
        if(to==='zh'){
            this.$i18n.locale = 'zh';
        } else {
            this.$i18n.locale = 'en';
        }
        window.localStorage.setItem('lang', this.$i18n.locale);
        return;
    }
  },
  computed:{
    env(){
      return process.env.NODE_ENV
    },
    // ...mapState({
    //   isLogin: state => state.isLogin
    // }),
    ...mapState(['isLogin']),
    // ...mapGetters(['isLogin']),
    invalidRoute(){
      this.$utils.log('invalid route');
      return !this.$route.matched || this.$route.matched.length === 0
    },
    // isLogin(){
    //   // return store.state.isLogin
    //   // return this.$store.getters.isLogin
    //   return this.$store.state.isLogin
    // }
  },
  mounted(){
    this.$utils.log('routes', routes);
    let newRoutes = [{
      // path:'dynamic', component: resolve => require(['@/components/Dynamic'], resolve)
      path:'/dynamic', component: Dynamic
    }];//.concat(routes.options.routes);
    this.$utils.log(newRoutes);
    this.$router.addRoutes(newRoutes);
  }
}
</script>