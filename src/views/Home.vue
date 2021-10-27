<template>
  <h1>Ini halaman home {{ $route.query.id }}</h1>
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
  <div class="gradient">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="gradient2">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class="social">
    <ul>
      <li class="youtube">Youtube</li>
      <li class="facebook">Facebook</li>
      <li class="twitter">Twitter</li>
      <li class="instagram">Instagram</li>
      <li class="twitch">Twitch</li>
    </ul>
  </div>
  <div class="square">

  </div>
</template>

<script>
import CircleComponent from '../components/CircleComponent.vue'
console.log(this);
export default {
  name: 'Home',
  components: {
    CircleComponent
  },
  mounted(){
    console.log(this.$route.query);
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

    
    /* Example for() */
.gradient{
  @include gradient();
  ul{
    list-style: none;
    @include flex();
    /* CSS elemen index dimulai dari 1 bukan 0 */
    @for $i from 1 to 11 {
      /* interpolasi #{$i} = ${variable_name} */
      li:nth-child(#{$i}){
        width: 50px;
        height: 50px;
        /* Example gradient with lighten or darken*/
        background-color: lighten($vue-color, $i * 3%);
        /* background-color: darken($vue-color, $i * 3%); */
      }
    }
  }
}

/* Example while */
.gradient2{
  @include gradient();
  ul{
    list-style: none;
    @include flex();

    /* Example while */
    $i: 1;
    @while $i < 11 {
      li:nth-child(#{$i}){
        width: 50px;
        height: 50px;
        background-color: darken($vue-color, $i * 3%);
        $i: $i + 1;
      }
    }
  }
}

/* Example each */
.social{
  ul{
    @include flex();
    width: 500px;
    justify-content: space-around;
    list-style: none;
    font-size: large;
    font-weight: bold;

    /* @each key, value in map_variable */
    @each $social, $color in $social-color {
      /* untuk setiap class bernama $social(key) dari $social-color, berikan color $color(value) dari $social-color */
      .#{$social}{
        color: $color;
      }
    }
  }
}

.square{
  @include square()
}
</style>
