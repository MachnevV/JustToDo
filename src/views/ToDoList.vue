<template>
  <h1>Working space</h1>
  <div class="column">
    <div class="fd">
      <h2>BackLog</h2>
      <OptionsToDo/>
    </div>
    <div class="fd">
      <h2>In Progress</h2>
      <OptionsToDo/>
    </div>
    <div class="fd">
      <h2>Test</h2>
      <OptionsToDo/>
    </div>    
    <div class="fd">
      <h2>Done</h2>
      <OptionsToDo/>
    </div>
  </div>
</template>

<script>
import OptionsToDo from '../components/OptionsToDo.vue'
import ToDoItem from '../components/ToDoItem.vue'
export default {
    components: {OptionsToDo, ToDoItem}
}
</script>

<style>
.column {
  display: flex;
  justify-content: space-between;
}

.fd {
  width: 250px;
}
</style>