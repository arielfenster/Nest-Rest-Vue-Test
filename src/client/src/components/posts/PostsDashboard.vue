<template>
  <div class="container">
    <div class="actions">
      <h1> Posts Dashboard </h1>
      <h3> Click a button to fetch desired amount of posts </h3>
      <button @click="fetchPosts(1)"> +1 </button>
      <button @click="fetchPosts(5)"> +5 </button>
      <button @click="fetchPosts(10)"> +10 </button>
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
      posts: [],
    };
  },
  methods: {
    setClickedPost(post) {
      this.clickedPost = post !== this.clickedPost ? post : null;
    },
    fetchPosts(amount) {
      const start = parseInt(Math.floor(Math.random() * 100), 10);
      fetch(`http://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${amount}`)
        .then((response) => response.json())
        .then((data) => this.posts.push(...data))
        .catch((error) => console.log(error));
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
  grid-row: 1 / 3;
  text-align: center;
  border-bottom: 2px solid black;
  margin-top: 20px;
}

button {
  border-radius: 10%;
  font-size: 2em;
  margin: 20px;
  background-color: blue;
  color: white;
}

button:hover {
  cursor: pointer;
  background-color: lightskyblue;
}

.sidebar {
  border-right: 2px solid black;
  height: 100%;
  background: #b3e5fc;
  grid-row: 1 / -1;
  grid-column: 1 / 4;
  overflow: auto;
}

.display {
  grid-row: 3 / -1;
  grid-column: 4 / -1;
}
</style>