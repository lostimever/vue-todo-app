// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/login'

  },
  {
    // path: '/app/:id',
    path: '/app',
    components: {
      default: () => import('../views/todo/todo.vue'),
      a: Login
    },
    // component: Todo,
    name: 'app',
    mate: {
      title: 'this is app'
    }
    // children: [ 子路由
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
]
