<template>
  <div class="posts">
    <h1> Posts </h1>
    <ul>
      <li v-for="post in posts" v-bind:key="post">
        <PostItem :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostItem from './PostItem';

export default {
  components: {
    PostItem,
  },
  // data() {
  // },
  computed: {
    posts() {
      return [
        { id: 'sad', author: 'this is author number 1', text: 'this is text number 1', views: 12 },
        { id: 'sad', author: 'this is author number 2', text: 'this is text number 2', views: 12 },
        { id: 'sad', author: 'this is author number 3', text: 'this is text number 3', views: 12 },
        { id: 'sad', author: 'this is author number 4', text: 'this is text number 4', views: 12 },
      ]
    },
  },
};
</script>

<style scoped>
.posts {
  flex: 1;
  border-right: 4px solid black;
  padding-top: 50px;
  display: grid;
  grid-template-columns: auto auto;
}
</style>
