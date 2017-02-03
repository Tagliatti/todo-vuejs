<script>
  import TodosService from './todos.service'

  export default {
    data() {
      return {
        todos: []
      }
    },
    methods: {
      remove: function (id) {
        TodosService.delete({ id: id })
          .then(TodosService.query)
          .then(res => {
            this.$set('todos', res.body)
          });
      }
    },
    route: {
      canReuse: true,
      waitForData: true,
      data() {
        return TodosService.query({ _sort: 'id', _order: 'DESC' })
          .then(res => {
            this.$set('todos', res.body)
          });
      }
    }
  }
</script>

<template>
  <div class="list">
    <div class="panel panel-default" v-for="todo in todos">
      <div class="panel-body">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.description }}</p>
      </div>
      <div class="panel-footer">
        <div class="col-xs-6">
          <button class="btn btn-xs btn-block btn-primary" @click="$router.go({ name: 'todo.edit', params: { id: todo.id } })">Edit</button>
        </div>
        <div class="col-xs-6">
          <button class="btn btn-xs btn-block btn-danger" @click="remove(todo.id)">Delete</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<style>
  .list {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .list .panel {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    min-width: 200px;
    max-width: 260px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .list .panel h3 {
    margin-top: 5px;
  }
</style>
