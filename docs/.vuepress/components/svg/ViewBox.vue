<template>
    <div>
        startX: <input v-model="startX"/> startY: <input v-model="startY"/> <br/>
        endX: <input v-model="endX"/> endT: <input v-model="endY"/> <br/>

        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg"
            v-bind:viewBox="viewBox"
        >
            <rect width="100%" height="100%" fill="red" />
            <circle cx="150" cy="100" r="80" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
    </div>
</template>

<script>
import {ref, computed} from 'vue'
export default {
    setup(){
        const startX = ref(0)
        const startY = ref(0)
        const endX = ref(225)
        const endY = ref(125)
        const viewBox = computed(() => `${startX.value} ${startY.value} ${endX.value} ${endY.value}`)

        return {
            startX,
            startY,
            endX,
            endY,
            viewBox
        }
    }
}
</script>
