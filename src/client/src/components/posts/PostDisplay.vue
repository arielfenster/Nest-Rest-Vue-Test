<template>
  <div v-if="post">
    <div class="header">
      <h1> {{ post.title }} </h1>
      <h4> By: {{ post.author }} </h4>
    </div>

    <div class="body">
      <p> {{ post.body }} </p>
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
  border: 2px solid green;
  padding: 20px;
  grid-row: 1 / 3;
  text-align: center;
}

h1 {
  margin: 20px 0px;
}

.body {
  grid-row: 3 / -1;
  border: 2px solid red;
  /* text-align: center; */
  /* font-family:Arial, Helvetica, sans-serif */
}

p {
  /* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;   */
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}
</style>
