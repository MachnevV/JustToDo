<template>
    <div class="fd">
        <h2>This's Colomn</h2>
        <ToDoItem/>
        <ToDoItem/>
    </div>
</template>

<script setup>
import ToDoItem from './ToDoItem.vue'
</script>

<style scoped>
.fd {
  width: 200px;
}
</style>