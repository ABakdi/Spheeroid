<script>
 import {mapState} from 'vuex'
 export default {
     props: {
         title: String,
         icon: String,
         clicked:{
             type: Boolean,
             default: false
         }
     },
 }
</script>

<template>
    <div :class="['button', clicked? 'clicked' : '' ]">
        <div class="icon">
            <i :class="['fa-solid', 'fa-'.concat(icon)]"></i>
        </div>
        <span>
            {{title}}
        </span>
    </div>
</template>

<style scoped>
 .button{
     background-color: rgba(17, 22, 29, 0.69);
     color: rgba(95, 133, 219, 1);
     display: flex;
     border-radius: 2%;
     align-items: center;
     padding-left: 5%;
     filter: brightness(1.2);
     transition: background 1s, border 0.1s ease-in-out;
 }

 div:hover{
     background-color: rgba(95, 133, 219, 1);
     color: rgba(38, 40, 43, 1);
     cursor: pointer;
     border-left: solid 2px black;
     filter: brightness(1);
 }

 .clicked{
     background-color: rgba(95, 133, 219, 1);
     color: rgba(38, 40, 43, 1);
     cursor: pointer;
     border-bottom: solid 2px black;
     filter: blur(0.4px);
 }

 span {
     padding-left: 5%;
 }

 .icon{
     color: white;
     text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
 }

</style>
