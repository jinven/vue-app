<template>
    <div>
        <h2>Socket</h2>
        <button @click="sendMessage()">send message</button>
    </div>
</template>

<script>
// npm install --save vue-socket.io
export default {
    data(){
        return {
            msg: ''
        }
    },
    methods:{
        sendMessage:function(){
            this.$socket.emit('chat', 'from vue');
        }
    }
}
</script>
