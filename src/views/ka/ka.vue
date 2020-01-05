<template>
    <div>
        <h2>ka.vue</h2>
        <div>
            <span>normal:</span>
            <label><input type="radio" name="radiogroup" value="1" v-model="tab" checked><span>tab1</span></label>
            <label><input type="radio" name="radiogroup" value="2" v-model="tab"><span>tab2</span></label>
            <div v-if="tab!=1">
                <span>value:{{tab}}</span>
                <label><input type="checkbox" v-model="cb1"><span>checkbox1</span></label>
                <label><input type="checkbox" v-model="cb2"><span>checkbox2</span></label>
            </div>
            <div v-else>
                <span>value:{{tab}}</span>
                <label><input type="checkbox" v-model="cb3"><span>checkbox3</span></label>
                <label><input type="checkbox" v-model="cb4"><span>checkbox4</span></label>
            </div>
        </div>
        <div>
            <span>keepalive:</span>
            <!-- <label v-for="t in tabs" :key="t"><input type="radio" name="radiotab"><span>{{t}}</span></label> -->
            <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', { active: currentTab === tab }]" v-on:click="currentTab = tab">{{ tab }}</button>
            <keep-alive>
                <component v-bind:is="tabComponent" class="tab"></component>
            </keep-alive>
        </div>
        <p>
            <button @click="goOne">go to one</button>
        </p>
    </div>
</template>

<style>
    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .tab-button:hover {
        background: #e0e0e0;
    }
    .tab-button.active {
        background: #e0e0e0;
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
    .posts-tab {
        display: flex;
        justify-content: center;
    }
    .posts-sidebar {
        max-width: 40vw;
        margin: 0;
        padding: 0 10px 0 0;
        list-style-type: none;
        border-right: 1px solid #ccc;
    }
    .posts-sidebar li {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }
    .posts-sidebar li:hover {
        background: #eee;
    }
    .posts-sidebar li.selected {
        background: lightblue;
    }
    .selected-post-container {
        padding-left: 10px;
    }
    .selected-post > :first-child {
        margin-top: 0;
        padding-top: 0;
    }
</style>

<script>
import tabPosts from '@/views/ka/kaPosts.vue'
import tabArchive from '@/views/ka/kaArchive.vue'

export default {
    name: 'KeepAliveKA',
    data(){
        return {
            tab: 1,
            tab2: 1,
            tabName: '',
            cb1:0,
            cb2:0,
            cb3:0,
            cb4:0,
            currentTab: 'Posts',
            tabs: ['Posts', 'Archive']
        }
    },
    computed:{
        tabComponent(){
            if(this.currentTab=='Archive'){
                return tabArchive;
            }
            return tabPosts;
            // return 'tab-' + this.currentTab.toLowerCase()
        }
    },
    methods:{
        goOne(){
            // this.$router.push({path:'/keepalive/one'});
            // this.$router.push('/keepalive/one');
            this.$router.push({name: 'keepaliveone', params: { name: 'lilei'}, query: {name:'my'}});
        }
    }
}
</script>