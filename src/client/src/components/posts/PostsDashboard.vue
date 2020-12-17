<template>
  <div class="posts-dashboard">
    <SideBar :posts="posts" @click="setClickedPost" />
    <PostDisplay :post="clickedPost" />
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
      clickedPost: {},
    };
  },
  computed: {
    posts() {
      return [
        { id: 'sad', title: 'This is title #1', author: 'this is author number 1', text: 'this is text number 1', views: 12 },
        { id: 'sad2', title: 'This is title #2', author: 'this is author number 2', text: 'this is text number 2', views: 12 },
        { id: 'sad3', title: 'This is title #3', author: 'this is author number 3', text: 'this is text number 3', views: 12 },
        { id: 'sad4', title: 'This is title #4', author: 'this is author number 4', text: 'this is text number 4', views: 12 },
      ];
    },
  },
  methods: {
    setClickedPost(post) {
      this.clickedPost = post;
    },
  },
};
</script>

<style scoped>
.posts-dashboard {
  flex: 1;
  border-right: 4px solid black;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: repeat(12, 1fr);
}
</style>