<script>
  import TodosService from './todos.service'

  export default {
    data() {
      return {
        todo: {}
      }
    },
    methods: {
      saveOrUpdate: function () {
        (this.todo.id === undefined) ? this.save() : this.update()
      },
      save: function () {
        TodosService.save(this.todo)
          .then(_ => {
            this.$router.go({ name: 'home' })
          });
      },
      update: function () {
        TodosService.update({id: this.todo.id}, this.todo)
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

        return TodosService.get({ id: id})
          .then(res => {
            this.$set('todo', res.body);
          });
      }
    }
  }
</script>

<template>
  <form action="#" class="well" @submit.prevent="saveOrUpdate">
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
