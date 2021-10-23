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
    color: white;
    font-size: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
}

</style>