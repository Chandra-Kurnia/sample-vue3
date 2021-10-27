<template>
    <button class="button-auth" @click="click">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ButtonAuth',
    methods: {
        click(){
            this.$emit('button-clicked')
        }
    }
}
</script>

<style lang="scss" scoped>
.button-auth{
    @include authStyle($vue-color, white, true, white)
}
</style>