<template>
    <div>
        <h2>slotte</h2>
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <p>body</p>
            <main>
                <p>main</p>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
        

        <!-- 接收 prop 的具名插槽 -->
        <!-- <infinite-scroll>
            <template v-slot:item="slotProps">
                <div class="item">
                {{ slotProps.item.text }}
                </div>
            </template>
        </infinite-scroll> -->

        <!-- 接收 prop 的默认插槽，使用了解构 -->
        <!-- <mouse-position v-slot="{ x, y }">
            Mouse position: {{ x }}, {{ y }}
        </mouse-position> -->
    </div>
</template>

<script>
export default {
    name: 'Slotte'
}
</script>