<script>
  import TodosService from './todos.service'

  export default {
    data() {
      return {
        todo: {}
      }
    },
    methods: {
      validate: function () {
        this.$validator.validateAll()

        if (!this.errors.any()) {
          this.saveOrUpdate()
        }
      },
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
  <form action="#" class="well" @submit.prevent="validate">
    <input type="hidden" v-model="todo.id">

    <div class="row">
      <div class="col-md-12">
        <div class="form-group" :class="{'has-error': errors.has('title')}">
          <label for="title" class="control-label">Title</label>
          <input type="text" class="form-control" v-model="todo.title" id="title"
                 v-validate data-vv-rules="required" name="title">

          <p class="text-danger" v-if="errors.has('title')">{{ errors.first('title') }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group" :class="{'has-error': errors.has('description')}">
          <label for="description" class="control-label">Description</label>
          <textarea class="form-control" v-model="todo.description" id="description"
                    v-validate data-vv-rules="required" name="description"></textarea>

          <p class="text-danger" v-if="errors.has('description')">{{ errors.first('description') }}</p>
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
