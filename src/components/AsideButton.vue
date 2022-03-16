<script>
 export default {
     name: "aside-button",
     data(){

     },
     props: ['title']
 }
</script>

<template>
    <div class="button">
         {{title}}
    </div>
</template>

<style>
 .button{
    background-color: rgba(17, 22, 29, 0.69);
    color: rgba(95, 133, 219, 1);
 }

</style>
