<script>
 export default {
     name: "aside-button",
     data(){

     },
     props: ['title', 'icon']
 }
</script>

<template>
    <div class="button">
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
     align-items: center;
     padding-left: 5%;
     filter: brightness(1.2);
 }

 div:hover{
     background-color: rgba(95, 133, 219, 1);
     color: rgba(38, 40, 43, 1);
     cursor: pointer;
     border-left: solid 2px black;
     filter: brightness(1);
 }

 span {
     padding-left: 5%;
 }

 .icon{
     color: white;
     text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
 }

</style>
