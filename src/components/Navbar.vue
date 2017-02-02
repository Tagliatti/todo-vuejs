<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <a class="navbar-brand" href="#">BIRL</a>
    <ul class="nav navbar-nav">
      <li>
        <a v-link="{ name: 'home' }">Home</a>
      </li>
      <li>
        <a v-link="{ name: 'todo.new' }">New Todo</a>
      </li>
    </ul>
  </nav>
</template>
