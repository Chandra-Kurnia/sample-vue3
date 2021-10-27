<template>
  <div class="form-auth">
    <input-auth placeholder="username" @change-value="change" inputName="username" :inputValue="this.form.username"></input-auth>
    <input-auth placeholder="password" type="password" @change-value="change" inputName="password" :inputValue="this.form.password"></input-auth>
    <button-auth @button-clicked="submit">
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
  data(){
    return{
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    submit(){
      console.log(this.form);
      this.form = {
        username: '',
        password: ''
      }
    },
    change(inputData){
      this.form = {
        ...this.form,
        [inputData.name]: inputData.value
      }
    }
  }
};
</script>