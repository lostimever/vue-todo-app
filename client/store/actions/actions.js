import model from '../../model/client.model'
import notify from '../../components/notification/function'
import bus from '../../utils/bus'

const handleErr = (err) => {
  if (err.code === 401) {
    notify({
      content: 'please login first'
      // btn: 'auth'
    })
    bus.$mount('auth')
  } else if (err.code === 400) {
    notify({
      content: '登陆失败'
    })
  }
}
export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  },
  fetchTodos ({
    commit
  }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleErr(err)
      })
  },
  addTodo ({
    commit
  }, todo) {
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: '新增'
        })
      })
      .catch(err => {
        handleErr(err)
      })
  },
  updateTodo ({
    commit
  }, { id, todo }) {
    model.updateTodo(id, todo)
      .then(data => {
        commit('updateTodo', { id, todo: data })
        notify({
          content: '修改成功'
        })
      })
      .catch(err => {
        handleErr(err)
      })
  },
  deleteTodo ({
    commit
  }, id) {
    model.deleteTodo(id)
      .then(data => {
        commit('deleteTodo', { id })
        notify({
          content: '删除TODO'
        })
      })
      .catch(err => {
        handleErr(err)
      })
  },
  deleteAllCompleted ({
    commit,
    state
  }) {
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(data => {
        commit('deleteAllCompleted')
        notify({
          content: '删除已完成TODOs'
        })
      })
      .catch(err => {
        handleErr(err)
      })
  },
  login ({
    commit
  }, {
    username,
    password
  }) {
    return new Promise((resolve, reject) => {
      console.log('开始请求')
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: '登陆成功'
          })
          resolve()
        })
        .catch(err => {
          console.log('请求失败')
          handleErr(err)
          reject(err)
        })
    })
  }
}
