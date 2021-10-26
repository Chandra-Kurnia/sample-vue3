<template>
    <button class="button-auth">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ButtonAuth',
}
</script>

<style lang="scss" scoped>
.button-auth{
    @include authStyle($vue-color, white, true, white)
}
</style>