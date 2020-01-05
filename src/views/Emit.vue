<template>
    <div>
        <h2>Emit</h2>
        <button @click="alertMsg('parent')">current</button>
        <EmitBase @alertParent="alertMsg" :sendData="msg" tips="alert from child" post-title="parent say hello" />
    </div>
</template>

<script>
import EmitBase from './emit/EmitBase'
export default {
    components:{
        EmitBase
    },
    data(){
        return {
            msg: ''
        }
    },
    methods:{
        alertMsg(data){
            alert(JSON.stringify(data));
        }
    }
}
</script>
