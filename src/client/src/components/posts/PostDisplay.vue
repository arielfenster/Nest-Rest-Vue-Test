<template>
  <div v-if="post">
    <div class="header">
      <h1> {{ post.title }} </h1>
      <h4> By: A random person </h4>
    </div>

    <div class="body">
      <p> {{ post.body }} </p>
    </div>
  </div>

  <div v-else>
    <div class="header">
      <h1> Here will be the contents of the post </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style scoped>

.header {
  padding: 20px;
  grid-row: 1 / 3;
  text-align: center;
}

h1 {
  margin: 20px 0px;
}

.body {
  grid-row: 3 / -1;
}

p {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  font-size: 1.7em;
}
</style>
