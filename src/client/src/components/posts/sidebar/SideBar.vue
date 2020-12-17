<template>
  <div class="sidebar">
    <div v-if="posts.length">
      <h2> Choose a post: </h2>
      <ul>
        <li v-for="(post) in posts" :key="post.id">
          <PostItem :post="post" @click="$emit('click', $event)"/>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2> Create some posts to view them here! </h2>
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem';

export default {
  components: {
    PostItem,
  },
  props: ['posts'],
};
</script>

<style scoped>
.sidebar {
  border: 4px solid black;
  height: 100%;
  background: #b3e5fc;
  grid-row: 1 / -1;
}

h2 {
  margin: 20px;
}

ul {
  list-style-type: none;
}

</style>