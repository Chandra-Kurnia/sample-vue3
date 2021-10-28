<template>
  <div class="wrapper">
    <div class="box-auth">
      <div class="switch">
        <router-link class="switcher" active-class="switch-active" to="/auth/login">Sign In</router-link>
        <router-link class="switcher" active-class="switch-active" to="/auth/signup">Sign Up</router-link>
      </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .box-auth {
    width: 400px;
    height: 500px;
    box-shadow: 1px 1px 5px;

    .switch {
      width: 100%;
      height: 50px;
      display: flex;
      flex-wrap: wrap;

      .switcher {
        background-color: $vue-color;
        width: 50%;
        text-decoration: none;
        text-align: center;
        color: white;
        line-height: 50px;
        transition: all 200ms ease-in-out;

        &:hover {
          background-color: saturate($color: $vue-color, $amount: 50);
        }
      }

      .switch-active {
        background-color: saturate($color: $vue-color, $amount: 50);
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Auth'
};
</script>
