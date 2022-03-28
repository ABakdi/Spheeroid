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
    <div class="shell">
        <div :class="['button', clicked? 'clicked' : '' ]">
            <div class="icon">
                <i :class="['fa-solid', 'fa-'.concat(icon)]"></i>
            </div>
            <span>
                {{title}}
            </span>
        </div>
    </div>
</template>

<style scoped>
 .shell{
     margin-bottom: 1px;
 }
 .button{
     background-color: rgba(17, 22, 29, 0.69);
     color: rgba(95, 133, 219, 1);
     display: flex;
     border-radius: 2%;
     align-items: center;
     padding-left: 5%;
     filter: brightness(1.2);
     transition: background 1s, border 0.1s ease-in-out;
     height: 100%;
 }

 .button:hover{
     background-color: rgba(95, 133, 219, 1);
     color: rgba(38, 40, 43, 1);
     cursor: pointer;
     filter: brightness(1);
 }

 .shell::after{
     transition: all ease-in-out .2s;
     background: none repeat scroll 0 0 #ffffff;
     content: "";
     display: block;
     height: 1px;
     width: 0;
 }

 .shell:hover::after{
     width: 100%;
 }

 .clicked {
     background-color: rgba(95, 133, 219, 1);
     color: rgba(38, 40, 43, 1);
     border-left: solid 2px black;
     filter: blur(0.45px);
 }

 span {
     padding-left: 5%;
 }

 .icon {
     color: white;
     text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
 }

</style>
