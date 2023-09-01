<template>
  <h1>Hello, {{ username }}</h1>
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
  <button @click="logout">Logout</button>
</template>

<script>
import OptionsToDo from '../components/OptionsToDo.vue'
import ToDoItem from '../components/ToDoItem.vue'
export default {
  components: {OptionsToDo, ToDoItem},
  data(){
    return {
      username: window.user
    }
  },
  methods:{
    logout(){
      window.user = null
      this.$router.push({name: 'Landing'})
    }
  }

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