<script>
 export default {
     data(){
         return{
             active: false
         }
     },
     props:{
         color:{
             type: String,
             default: 'prime'
         }
     },
     computed:{
     },
     methods:{
         click: function(state){
             this.active = state
         }
     }
 }
</script>

<template>
    <div :class="['button', {'button-click': active}, color]"
       @mousedown="click(true)" @mouseup="click(false)">
        <slot></slot>
    </div>
</template>

<style scoped>

 .button{
     color: rgba(38, 40, 43, 1);
     border-radius: 3%;
     display: flex;
     justify-content: center;
     align-items: center;
     transition: filter 0.1s ease-in;
     padding: 3px;
 }
 .button-click{
     filter: brightness(0.65)
 }

 .button:hover{
     cursor: pointer;
     color: white;
 }
 .prime{
     background-color: rgba(95, 133, 219, 1);
 }
 .sec{
     background-color: rgba(185, 59, 96, 1);
 }
</style>
