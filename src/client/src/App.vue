<template>
  <div id="app">
    <PostsDashboard />
    <UsersDashboard />
  </div>
</template>

<script>
import PostsDashboard from './components/posts/PostsDashboard';
import UsersDashboard from './components/users/UsersDashboard';

export default {
  name: 'App',
  components: {
    PostsDashboard,
    UsersDashboard,
  },
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
