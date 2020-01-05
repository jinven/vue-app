<template>
    <div>
        <h2>AXIOS</h2>
        <p>
            <label><input type="radio" name="axios" value="0" v-model="type"><span>get</span></label>
            <label><input type="radio" name="axios" value="1" v-model="type"><span>post</span></label>
            <label><input type="radio" name="axios" value="2" v-model="type"><span>put</span></label>
            <label><input type="radio" name="axios" value="3" v-model="type"><span>delete</span></label>
            <label><input type="radio" name="axios" value="4" v-model="type"><span>head</span></label>
        </p>
        <div class="forms">
            <form @submit.prevent="submit">
                <div>
                    <label><span>url:</span><input type="url" v-model="fm.url" required></label>
                </div>
                <div>
                    <label><span>header:</span><textarea name="" id="" cols="30" rows="3" v-model="fm.header"></textarea></label>
                </div>
                <div v-if="type!=0">
                    <label><span>body:</span><textarea name="" id="" cols="30" rows="3" v-model="fm.body"></textarea></label>
                </div>
                <div>
                    <span></span>
                    <button>submit</button>
                </div>
            </form>
            <div>
                <span>response:</span>
                <textarea name="" id="" cols="30" rows="10" v-model="response" :style="{color:isError?'red':''}"></textarea>
            </div>
        </div>
    </div>
</template>
<style>
    .forms span{
        display: inline-block;
        width:70px;
        min-height:20px;
        padding-right: 10px;
        vertical-align: top;
        text-align: right;
    }
    .forms div{
        margin:5px 0;
    }
    .forms input, .forms textarea, .forms button{
        width: 300px;
        min-height: 26px;
    }
</style>
<script>
import Vue from 'vue';
const axios = require('axios');
export default {
    name: 'Axios',
    data(){
        return {
            type: 0,
            fm:{
                body:'',
                header:'',
                url: location.href
            },
            isError:false,
            response:'',
        }
    },
    methods:{
        success(response){
            this.$utils.log('response',response);
            this.isError=false;
            this.response = response.data;
        },
        error(error){
            this.$utils.log('error',error);
            this.isError=true;
            this.response = error;
        },
        print(msg){
            this.$utils.log(msg);
        },
        submit(){
            var formData = JSON.stringify(this.fm);
            // var self=this;
            this.print(formData);
            if(this.type==0){
                // get
                axios.get(this.fm.url, {params:{id:123}}).then(this.success).catch(this.error);
                Vue.axios.get('http://icanhazip.com').then(this.success).catch(this.error);
            }
            if(this.type==1){
                // post
                axios.post(this.fm.url, {id:234}).then(this.success).catch(this.error);
                // Send a POST request
                axios({
                method: 'post',
                url: '/user/12345',
                data: {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                }
                });
            }
            if(this.type==2){
                // put
            }
            if(this.type==3){
                // delete
            }
            this.$utils.log(axios);
        }
    }
}
</script>