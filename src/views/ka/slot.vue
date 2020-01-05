<template>
    <div>
        <h2>v-slot</h2>
        <Slotte>
            <!-- <div slot="header">Header content</div>
            <div slot="footer">Footer content</div> -->
            
        
            <template v-slot:header>
                Header content
            </template>

            Default slot content

            <template v-slot:footer>
                Footer content
            </template>
        </Slotte>
    </div>
</template>

<script>
import Slotte from '@/views/ka/slotte.vue'
export default {
    name: 'KeepAliveSlot',
    components:{
        Slotte
    }
}
</script>