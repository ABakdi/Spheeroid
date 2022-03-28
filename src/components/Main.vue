<script>
 import Search from './pages/Search.vue'
 import Requests from './pages/Requests.vue'
 import Connected from './pages/Connected.vue'
 import Files from './pages/Files.vue'
 import Messages from './pages/Messages.vue'

 export default {
     data(){

     },
     components:{
         Search,
         Requests,
         Connected,
         Files,
         Messages
     },
     methods:{
     },
     computed:{
         page: function(){
             return this.$store.state.page
         }
     }
 }
</script>

<template>
    <div class="main">
        <search v-if="page=='search'"/>
        <requests v-else-if="page=='requests'"/>
        <connected v-else-if="page=='connected'"/>
        <files v-else-if="page=='files'"/>
    </div>
</template>

<style>
 .main{
     width: 100%;
     height: 100%;
 }

</style>
