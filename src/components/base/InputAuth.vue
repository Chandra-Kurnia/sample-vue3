<template>
  <input class="input" :type="type" :placeholder="placeholder" v-model="value" @keyup="change" :value="inputValue"/>
</template>

<style lang="scss" scoped>
.input {
  @include authStyle()
}
</style>

<script>
export default {
  name: 'InputAuth',
  props: {
    placeholder: String,
    type: String,
    inputName: String,
    inputValue: String
  },
  data(){
    return{
      name: this.inputName,
      value: ''
    }
  },
  methods: {
    change(){
      this.$emit('change-value', {
        name: this.name,
        value: this.value
      })
    }
  }
};
</script>
