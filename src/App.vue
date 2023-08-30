<template>
  <div class="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/todolist">ToDoList</router-link>
  </div>
  <router-view/>
</template>

<script>
</script>

<style>
.body {
  color: #ccdcdc;
}
.nav {
  padding: 30px;
  /* background: linear-gradient(-90deg, #a7da96, #48cabd); */
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
