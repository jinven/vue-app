<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome"/>
  </div>
</template>
<style lang="scss">
  .home{
    position:relative;
    img{
      position:absolute;
      left:50%;
      margin-left:-100px;
      opacity:.3;
      filter:blur(10px);
    }
  }
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
