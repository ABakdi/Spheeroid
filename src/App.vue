<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Aside from './components/Aside.vue'
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
</script>

<template>
    <div class="container">
        <Nav id="nav"/>
        <Aside id="aside"/>
        <Main id="main"/>
    </div>
</template>

<style>
 .container{
     display: grid;
     min-height: 97vh;
     min-width: 97vw;
     border: solid red 1px;
     grid-template-rows: 1fr 10fr;
     grid-template-columns: 1fr 5fr;
     grid-template-areas: 'aside nav'
     'aside main';
     background-color: rgba(38, 40, 43, 0.9);
 }

 #nav{
     grid-area: nav;
 }

 #aside{
     grid-area: aside;
 }

 #main{
     grid-area: main;
 }
</style>
