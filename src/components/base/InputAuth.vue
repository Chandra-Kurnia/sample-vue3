<template>
  <input class="input" :type="type" :placeholder="placeholder"/>
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
    type: String
  },
};
</script>
