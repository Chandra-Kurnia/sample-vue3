<template>
    <div class="NavbarWrapper">
        <span>Hello Candra</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.NavbarWrapper{
    width: 100%;
    height: 70px;
    background-color: $vue-color;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

span{
    display: block;
    font-size: 30px;
    
    /* example using  map variable*/
    color: map-get($alert, 'primary');
}
}

</style>