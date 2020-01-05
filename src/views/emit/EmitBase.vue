<template>
    <div>
        <h2>EmitBase</h2>
        <p>parent msg: {{postTitle}}, {{tips}}</p>
        <button @click="emitParent()">Emit Parent</button>
    </div>
</template>

<script>
export default {
    methods:{
        emitParent(){
            this.$emit('alertParent', {
                msg: 'emit from child'
            })
        }
    },
    props: ['postTitle', 'tips']
}
</script>