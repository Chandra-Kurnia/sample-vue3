<template>
  <Navbar>
    <div class="Navigation">
      <router-link class="link" active-class="active" to="/">Home</router-link>
      <router-link class="link" active-class="active" to="/about">About</router-link>
      <router-link class="link" active-class="active" to="/auth">Auth</router-link>
    </div>
  </Navbar>
    <router-view></router-view>
  <Footer> </Footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
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
  padding-top: 70px;
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

.wrapper {
  min-height: 80vh;
  position: relative;
  padding-left: 100px;
  padding-right: 100px;
}

.form-auth {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
