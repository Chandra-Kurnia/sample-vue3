<template>
  <div class="form-auth">
    <input-auth placeholder="username"></input-auth>
    <input-auth placeholder="email"></input-auth>
    <input-auth placeholder="phone number"></input-auth>
    <input-auth placeholder="password" type="password"></input-auth>
    <input-auth placeholder="verify password" type="password"></input-auth>
    <button-auth>
      Sign Up
    </button-auth>
  </div>
</template>

<script>
import ButtonAuth from '../base/ButtonAuth.vue';
import InputAuth from '../base/InputAuth.vue';

export default {
  name: 'FormSignup',
  components: {InputAuth, ButtonAuth},
};
</script>
