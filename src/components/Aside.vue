<script>
 import AsideButton from './AsideButton.vue'
 export default {
     data(){

     },
     components:{
         AsideButton
     }
 }
</script>

<template>
    <div class="side-bar">
        <aside-button title="Search" class="side-nav-el"/>
        <aside-button title="Requests" class="side-nav-el"/>
        <aside-button title="Connected" class="side-nav-el"/>
        <aside-button title="Files" class="side-nav-el"/>
        <aside-button title="Messages" class="side-nav-el"/>
    </div>
</template>

<style>
 .side-bar{
     width: 20vw;
     height: 97vh;
     background-color: rgba(38, 40, 43, 0.79);
 }

 .side-nav-el{
     height: 7%;
     width: 100%;
 }

</style>
