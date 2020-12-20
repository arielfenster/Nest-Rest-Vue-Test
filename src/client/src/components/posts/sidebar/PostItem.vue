<template>
  <div class="post" @click="$emit('click', post)">
   <h3> {{ post.title }} </h3>
   <span> Views: {{ post.views }} </span>
  </div>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style scoped>
.post {
  border-top: 4px dashed black;
  padding: 30px 0px 30px 20px;
}
.post:hover {
  cursor: pointer;
  background-color: #29b6f6;
}
</style>
