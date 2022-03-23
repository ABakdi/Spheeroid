<script>
 export default {
     data(){

     },
     props:{
         color:{
             type: String,
             default: 'prime'
         }
     },
     methods:{
     },
     computed:{
     }
 }
</script>

<template>
    <div :class="['panel', color]">
        <div class="top">
            <div class="main">
                <slot name="main"></slot>
            </div>
            <div class="side">
                <slot name="side"></slot>
            </div>
        </div>
        <div class="bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
 </template>

<style scoped>
 .panel{
     display: flex;
     flex-direction: column;
     padding: 5px 2% 5px 2%;
 }

 .top{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
 }

 .side{
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     width: 15%;
 }

 .prime{
     background-color: rgba(38, 40, 43, 0.7);
 }

 .sec{
     background-color: rgba(27, 35, 46, 1);
 }
</style>
