<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h2>Login</h2>
      <div class="notific">
        <h3 style="color: red;" v-show="username.length < 3 && username.length > 0">Enter full name</h3>
        <h3 style="color: red;" v-if="username.length > 15">Incorrect name length</h3>
      </div>

      <label for="username">Username</label>
      <input v-model="username" name="username" type="text" class="input">
      <label for="password">Password</label>
      <input v-model="password" name="password" type="text" class="input">
      <button v-bind:disabled="username.length < 3 || username.length > 15">Login</button>
    </form>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      window.user = this.username
      this.$router.push({name: 'ToDoList'})
    }
  }
}
</script>

<style>
.form {
  display:flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 8px;
  width: 400px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.input {
  border: 1px solid gray;
  padding: 10px;
  margin-bottom:20px;
  border-radius:5px;
}
.notific {
height: 65px;
}
</style>