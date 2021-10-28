<template>
<div class="wrapper">
    <h1>Ini halaman about, {{ name ? name : 'Yourname Here' }}</h1>
</div>
</template>

<script>
export default {
    name: 'About',
    data(){
        return{
            name: ''
        }
    },
    mounted(){
        this.name = this.$route.params.name;
    }
}
</script>