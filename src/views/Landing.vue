<template>
  <div class="homepage">
    <div class="welcome">
      <div class="tex">
        <h1>Just to do List</h1>
        <h2>Welcome and have a good day!</h2>
      </div>
      <div>
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </div>
      <button>
        <router-link to="/todolist">Go to the ToDoList</router-link>
      </button>
    </div>
    <Login />
  </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  components: {Login}
}
</script>

<style>
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.homepage {
  display: flex;
}
</style>