<template>
    <div>
        <h3>Task #<button type="button" @click="count++">{{ count }}</button></h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>

</style>