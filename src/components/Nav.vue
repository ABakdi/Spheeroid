
<script>
 export default {
     data(){

     }
 }
</script>

<template>
    <div class="nav-bar">
        <div class="nav-things">
            <div class="green circle"></div>
            <span>Visible</span>
        </div>
        <div class="nav-links">
            <div class="link">
                <i class="fa-solid fa-user"></i>
                <a href='#'>Profile</a>
            </div>
            <div class="link">
                <i class="fa-solid fa-gear"></i>
                <a href='#'>Settings</a>
            </div>
        </div>
    </div>
</template>

<style>
 .nav-bar{
     width: 100%;
     height: 100%;
     background-color: rgba(38, 40, 43, 0.63);
     display: flex;
     flex-direction: row;
     justify-content: space-between;
 }


 .nav-things{
     display: flex;
     flex-direction: row;
     align-items: center;
     margin-left: 2%;
     justify-content: space-between;
     min-width: 10%
 }

 .circle{
     border: 1px solid black;
     border-radius: 50%;
     width: 12px;
     height: 12px;
 }

 .green{
     background-color: green;
 }

 .red{
     background-color: red;
 }

 .nav-links{
     display: flex;
     justify-content: space-between;
     margin-right: 10%;
 }

 .link{
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
     padding-right: 30%;
     color: white;
 }

 .link a{
     margin-left: 8%;
     text-decoration: none;
     color: white;
     /* stroke text using shadow thanks to:
     / https://stackoverflow.com/questions/4919076/outline-effect-to-text
     */
     text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
 }


</style>
