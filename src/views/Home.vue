<template>
  <h1>Ini halaman home</h1>
  <div class="list">
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <li>List 4</li>
      <li>List 5</li>
    </ul>
  </div>
  <div class="list2">
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <li>List 4</li>
      <li>List 5</li>
    </ul>
  </div>
  <CircleComponent :circle="true"></CircleComponent>
</template>

<script>
import CircleComponent from '../components/CircleComponent.vue'
export default {
  name: 'Home',
  components: {
    CircleComponent
  }
};
</script>

<style lang="scss" scoped>
.list{
    /* call mixin */
    @include flex();
    ul{
        @include list(salmon, 20px, 20px);
    }
}

.list2{
    @include flex();
    ul{
        @include list(gray, 20px, 50px);
    }
}
</style>
