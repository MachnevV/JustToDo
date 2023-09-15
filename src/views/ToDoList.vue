<template>
  <h1>Hello, {{ username }}</h1>
  <div class="table">
    <div class="column">
      <h2>BackLog</h2>
      <OptionsToDo />
    </div>
    <div class="column">
      <h2>In Progress</h2>
      <OptionsToDo />
    </div>
    <div class="column">
      <h2>Test</h2>
      <OptionsToDo />
    </div>
    <div class="column">
      <h2>Done</h2>
      <OptionsToDo />
    </div>
  </div>
  <button @click="logout">Logout</button>
</template>

<script>
import OptionsToDo from '../components/OptionsToDo.vue'
export default {
  components: { OptionsToDo },
  data() {
    return {
      username: window.user,
    }
  },
  methods: {
    logout() {
      window.user = null
      this.$router.push({ name: 'LandingPage' })
    },
  },
}
</script>

<style>
.table {
  display: flex;
  justify-content: space-between;
}
.column {
  width: 250px;
}
</style>
