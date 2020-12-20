<template>
  <div class="container">
    <div class="actions">
      <h1> this is actions div </h1>
    </div>
    <div class="sidebar">
      <SideBar :posts="posts" @click="setClickedPost" />
    </div>
    <div class="display">
      <PostDisplay :post="clickedPost" />
    </div>
  </div>
</template>

<script>
import SideBar from './sidebar/SideBar';
import PostDisplay from './PostDisplay';

export default {
  components: {
    SideBar,
    PostDisplay,
  },
  data() {
    return {
      clickedPost: null,
    };
  },
  computed: {
    posts() {
      return [
        { id: 'sad', title: 'This is title #1', author: 'this is author number 1', body: 'this is the body of post #1', views: 13 },
        { id: 'sad2', title: 'This is title #2', author: 'this is author number 2', body: 'this is the body of post #2', views: 14 },
        { id: 'sad3', title: 'This is title #3', author: 'this is author number 3', body: 'this is the body of post #3', views: 15 },
        { id: 'sad4', title: 'This is title #4', author: 'this is author number 4', body: 'this is the body of post #4', views: 16 },
      ];
    },
  },
  methods: {
    setClickedPost(post) {
      this.clickedPost = post !== this.clickedPost ? post : null;
    },
  },
};
</script>

<style>
.container {
  flex: 1;
  border-right: 4px solid black;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.actions {
  grid-column: 4 / -1;
  border: 2px solid purple;
  grid-row: 1 / 3;
}

.sidebar {
  border: 2px solid black;
  height: 100%;
  background: #b3e5fc;
  grid-row: 1 / -1;
  grid-column: 1 / 4;
}

.display {
  grid-row: 3 / -1;
  grid-column: 4 / -1;
}
</style>