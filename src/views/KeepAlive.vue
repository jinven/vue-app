<template>
    <div>
        <label><input type="checkbox"><span>A</span></label>
        <label><input type="checkbox"><span>B</span></label>
        <label><input type="checkbox"><span>C</span></label>
        <label><input type="checkbox"><span>D</span></label>
        <div id="ka">
            <span><router-link to="/keepalive">keepalive</router-link> | </span>
            <span v-for="(nav, index) in navs" :key="nav"><router-link :to="'/keepalive/'+nav">{{nav}}</router-link> {{index==navs.length-1 ?'':'|'}} </span>
            <!-- <router-link to="/keepalive/">one</router-link> |
            <router-link to="/keepalive/">two</router-link> -->
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'KeepAlive',
    data(){
        return {
            navs:['one','two', 'three', 'slot']
        }
    }
}
</script>