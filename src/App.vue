<template>
  <h1>To Do List will be here</h1>
  <div class="column">
    <ToDoList/>  
    <ToDoList/>
    <ToDoList/>    
    <ToDoList/>
  </div>
</template>

<script setup>
import ToDoList from './components/ToDoList.vue'
</script>

<style scoped>
.column {
  display: flex;
  justify-content: space-between;
}
</style>
