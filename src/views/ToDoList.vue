<template>
  <h1>To Do List will be here ...</h1>
  <OptionsToDo/>

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
  width: 200px;
}
</style>