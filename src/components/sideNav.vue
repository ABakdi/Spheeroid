<script>
 import AsideButton from './AsideButton.vue'
 export default {
     data(){
         return {
             selected: "search"
         }
     },
     components:{
         AsideButton
     },
     emits: ['page'],
     methods:{
         clickNavButton: function(title){
             this.selected = title
             this.$store.commit('changePage', title)
         }
     }
 }
</script>

<template>
    <div class="side-nav">
        <aside-button title="Search" ref="search" icon="magnifying-glass"
                        class="side-nav-el" :clicked="selected=='search'" @click="clickNavButton('search')"/>
        <aside-button title="Requests" ref="requests" icon="code-pull-request"
                        class="side-nav-el" :clicked="selected=='requests'" @click="clickNavButton('requests')"/>
        <aside-button title="Connected" ref="connected" icon="network-wired"
                        class="side-nav-el" :clicked="selected=='connected'" @click="clickNavButton('connected')"/>
        <aside-button title="Files" ref="files" icon="file-arrow-down"
                        class="side-nav-el" :clicked="selected=='files'" @click="clickNavButton('files')"/>
        <aside-button title="Messages" ref="messages" icon="envelope"
                        class="side-nav-el" :clicked="selected=='messages'" @click="clickNavButton('messages')"/>
    </div>
</template>

<style>
 .side-nav-el{
     height: 15%;
     max-width: 100%;
 }

 .side-nav{
     height: 50%;
     width: 100%;
     display: flex;
     flex-direction: column;
 }

</style>
