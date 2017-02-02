<script>
  export default {
    data() {
      return {
        todo: {}
      }
    },
    methods: {
      save: function () {
        this.$http.post('http://localhost:8080/todos', this.todo)
          .then(_ => {
            this.$router.go({ name: 'home' })
          });
      }
    },
    route: {
      canReuse: false,
      waitForData: true,
      data() {
        let id = this.$route.params.id;

        if (id === undefined) return;

        return this.$http.get('http://localhost:8080/todos/'+ id)
          .then(res => {
            this.$set('todo', res.body);
          });
      }
    }
  }
</script>

<template>
  <form action="#" class="well" @submit.prevent="save">
    <input type="hidden" v-model="todo.id">

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="control-label">Title</label>
          <input type="text" class="form-control" v-model="todo.title">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="control-label">Description</label>
          <textarea class="form-control" v-model="todo.description"></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
      <div class="col-md-6 text-right">
        <button type="button" @click="$router.go({ name: 'home' })" class="btn btn-default">Back</button>
      </div>
    </div>
  </form>
</template>

<style>
</style>
