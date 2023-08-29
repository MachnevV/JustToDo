<template>
    <div>
        <h3>Task 1:</h3>
        <h3>Task 2:</h3>
        <!-- <button type="button" @click="count++">{{ count }}</button> -->

        <button type="button">New task</button>
        <!-- <input type="text">
        <input type="checkbox" name="" id=""> -->
        
        <br>
        <label for="task-name">Task Name:</label>
        <input id="task-name">
        
        <br>
        <label for="status">Status:</label>
        <select id="status">
            <option>BackLog</option>
            <option>In Progress</option>
            <option>Test</option>
            <option>Done</option>
        </select>
    </div>
</template>

<script>
// import { ref } from 'vue'
// const count = ref(0)
</script>

<style>
</style>