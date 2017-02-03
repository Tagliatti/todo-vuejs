export default {
  '/': {
    name: 'home',
    component: function(resolve) {
      require(['./TodoList.vue'], resolve)
    }
  },
  '/new': {
    name: 'todo.new',
    component: function(resolve) {
      require(['./TodoForm.vue'], resolve)
    }
  },
  '/edit/:id': {
    name: 'todo.edit',
    component: function(resolve) {
      require(['./TodoForm.vue'], resolve)
    }
  }
}
