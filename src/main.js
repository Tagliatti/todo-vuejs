import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import TodoList from './components/todo/TodoList.vue'
import TodoForm from './components/todo/TodoForm.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    name: 'home',
    component: TodoList
  },
  '/new': {
    name: 'todo.new',
    component: TodoForm
  },
  '/edit/{id}': {
    name: 'todo.edit',
    component: TodoForm
  }
})

router.start(App, '#app')
