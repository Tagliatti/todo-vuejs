<script>
  export default {
    data() {
        return {
            todos: []
        }
    },
    route: {
      canReuse: true,
      waitForData: true,
      data() {
        return this.$http.get('http://localhost:8080/todos')
          .then(res => {
            this.$set('todos', res.body);
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
    min-width: 180px;
    max-width: 260px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .list .panel h3 {
    margin-top: 5px;
  }
</style>
