<template>
    <div>
        <h2>one.vue</h2>
        <label><input type="radio" name="radiogroup" checked><span>get</span></label>
        <label><input type="radio" name="radiogroup"><span>post</span></label>
        <p>params:{{$route.params}}</p>
        <p>query:{{$route.query}}</p>
    </div>
</template>

<script>
export default {
    name: 'KeepAliveOne'
}
</script>