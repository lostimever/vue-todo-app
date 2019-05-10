export default {
  updateCount (state, { num, num2 }) {
    // console.log(num2)
    state.count = num
  },
  fillTodos (state, todos) {
    state.todos = todos
  },
  addTodo (state, todo) {
    state.todos.unshift(todo)
  },
  updateTodo (state, { id, todo }) {
    console.log('开始更新...')
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1,
      todo
    )
  },
  deleteTodo (state, id) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1
    )
  },
  deleteAllCompleted (state) {
    console.log(state)
    state.todos = state.todos.filter(t => !t.completed)
  },
  doLogin (state, userInfo) {
    console.log('请求了吗')
    state.user = userInfo
  }
}
