<template>
  <div class="home">
    <h3>{{ todosCount }} items</h3>
    <div>
      <input
        id="input"
        v-model="newTodoName"
        placeholder="Add a Todo"
        type="text"
        @keyup.enter="addTodo" />
      <input id="input" type="button" value="+" @click="addTodo" />
      <!-- <button>+</button> -->
    </div>
  </div>

  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <span>{{ todo.name }}</span>
        <button @click="deleteTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoName: '',
      todos: [
        {
          id: 1,
          name: 'First task',
        },
        {
          id: 2,
          name: 'Second task',
        },
      ],
      swearwords: ['bad', 'very bad'],
    }
  },
  computed: {
    todosCount() {
      return this.todos.length
    },
  },
  watch: {
    newTodoName(newValue) {
      if (this.swearwords.includes(newValue.toLowerCase())) {
        alert('Never say ' + newValue + ' !')
        this.newTodoName = ''
      }
    },
  },
  methods: {
    addTodo() {
      if (this.newTodoName != '') {
        let newTodo = {
          id: Date.now(),
          name: this.newTodoName,
        }
        this.todos.push(newTodo)
        this.newTodoName = ''
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
  },
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  width: 240px;
  margin: 20px auto 0;
}
li {
  border: 1px outset;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow:
    0 2px 5px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
}
li span {
  flex-grow: 1;
}
input {
  height: 30px;
}
</style>
