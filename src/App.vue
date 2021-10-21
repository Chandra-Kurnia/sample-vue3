<template>
  <Navbar>
    <div class="Navigation">
      <router-link class="link" active-class="active" to="/">Home</router-link>
      <router-link class="link" active-class="active" to="/about">About</router-link>
    </div>
  </Navbar>
  <router-view class="content" />
  <Footer>
  </Footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Navigation {
  margin: 10px;
}

.link {
  text-decoration: none;
  color: white;
  margin: 10px;
  border-bottom: 4px solid white;
  transition: all 100ms ease-in-out;
}

.active {
  border-bottom: 4px solid rgb(179, 255, 0);
}
</style>
