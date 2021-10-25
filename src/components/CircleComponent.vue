<template>
    <div class="">
        {{ circle ? 
            "circle true"
            :
            "circle false"
        }}
        <div class="box"></div>
        <div class="circle"></div>
    </div>
</template>

<script>
export default {
    name: 'CircleComponent',
    props: {
        circle: Boolean
    }
}
</script>

<style lang="scss" scoped>
.box{
    @include circle(false, red)
}
.circle{
    @include circle(true, blue)
}
</style>