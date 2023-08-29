<template>
  <div class="nav">
    <router-link to="/">Landing</router-link> | 
    <router-link to="/todolist">ToDoList</router-link>
  </div>
  <router-view/>
</template>

<script>
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
