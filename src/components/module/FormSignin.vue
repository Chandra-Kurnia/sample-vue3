<template>
  <div class="form-auth">
    <input-auth placeholder="username"></input-auth>
    <input-auth placeholder="password" type="password"></input-auth>
    <button-auth>
        Sign In
    </button-auth>
  </div>
</template>

<script>
import ButtonAuth from '../base/ButtonAuth.vue';
import InputAuth from '../base/InputAuth.vue';

export default {
  name: 'FormSignin',
  components: {InputAuth, ButtonAuth},
};
</script>