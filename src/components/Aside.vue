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
        <div class="brand">
            <div class="logo">
                <img src="../assets/logo.svg"/>
            </div>

            <span class="title">
                Shpeeroid
            </span>
        </div>
        <div class="side-nav">
            <aside-button title="Search" icon="magnifying-glass"
                          class="side-nav-el"/>
            <aside-button title="Requests" icon="code-pull-request"
                          class="side-nav-el"/>
            <aside-button title="Connected" icon="network-wired"
                          class="side-nav-el"/>
            <aside-button title="Files" icon="file-arrow-down"
                          class="side-nav-el"/>
            <aside-button title="Messages" icon="envelope"
                          class="side-nav-el"/>
        </div>
    </div>
</template>

<style>
 .side-bar{
     max-width: 25vw;
     height: 97vh;
     background-color: rgba(38, 40, 43, 0.79);
     padding-right: 2px;
 }

 .side-nav-el{
     height: 20%;
     max-width: 100%;
     margin-bottom: 2px;
 }

 .side-nav{
     height: 50%;
     width: 100%;
     display: flex;
     flex-direction: column;
 }

 .brand{
     width: 100%;
     max-height: 20%;
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 0;
 }

 .logo{
     width: 100%;
     max-height: 100%;
 }
 

 .logo img{
     max-width: 90%;
 }

 .title{
     margin-right: 10%;
     font-size: 1.3em;
     font-weight: bolder;
     color: rgba(144, 184, 248, 1);
 }

</style>
