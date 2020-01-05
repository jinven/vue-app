<template>
    <div>
        <h2>Backtop</h2>
        <el-backtop target=".router-link-exact-active"></el-backtop>
        <el-backtop target=".router-link-exact-active" :bottom="100">
            <div
            style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
            }"
            >
            UP
            </div>
        </el-backtop>
    </div>
</template>

<script>
export default {
    name: 'ElemeBacktop',

}
</script>