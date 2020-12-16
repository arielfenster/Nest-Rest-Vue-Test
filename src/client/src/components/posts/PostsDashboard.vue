<template>
  <div class="posts-dashboard">
    <SideBar :posts="posts" />
    <h1>dashboard</h1>
  </div>
</template>

<script>
import SideBar from './view/SideBar';

export default {
  components: {
    SideBar,
  },
  computed: {
    posts() {
      return [
        { id: 'sad', title: 'This is title #1', author: 'this is author number 1', text: 'this is text number 1', views: 12 },
        { id: 'sad', title: 'This is title #2', author: 'this is author number 2', text: 'this is text number 2', views: 12 },
        { id: 'sad', title: 'This is title #3', author: 'this is author number 3', text: 'this is text number 3', views: 12 },
        { id: 'sad', title: 'This is title #4', author: 'this is author number 4', text: 'this is text number 4', views: 12 },
      ];
    },
  },
};
</script>

<style scoped>
.posts-dashboard {
  flex: 1;
  border-right: 4px solid black;
  /* padding-top: 50px; */
  display: grid;
  grid-template-columns: 30% auto;
}
</style>