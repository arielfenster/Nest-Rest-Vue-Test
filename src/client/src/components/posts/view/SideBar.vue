<template>
  <div class="sidebar">
    <h2> Choose a post: </h2>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <PostItem :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostItem from '../PostItem';

export default {
  components: {
    PostItem,
  },
  props: ['posts'],
};
</script>

<style scoped>
.sidebar {
  /* padding: 20px; */
  border: 4px solid black;
  height: 100%;
  background: #b3e5fc;
}

h2 {
  margin: 20px;
}

ul {
  list-style-type: none;
}

</style>