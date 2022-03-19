<script>
 export default {
     data(){

     },
     methods:{
     },
     computed:{
     }
 }
</script>

<template>
    <div class="container">
        <div class="search-bar">

            <input placeholder="Search"/>

            <div class="search-button">
                <span>Search</span>
            </div>
        </div>
        <div class="resaults">
            Res
        </div>
    </div>
</template>

<style scoped>
 .container{
     width: 97%;
     min-height: 95%;
     padding: 1%;
     display: flex;
     flex-direction: column;
 }
 .search-bar{
     display: flex;
     flex-direction: row;
     width: 90%;
     justify-content: space-around;
     align-self: center;
     flex: 1;
 }

 .search-bar input{
     min-height: 100%;
     width: 60%;
     background-color: rgba(38, 40, 43, 1);
     border: none;
     color: rgba(95, 133, 219, 0.26);
 }

 .search-button{
     background-color: rgba(95, 133, 219, 1);
     color: rgba(38, 40, 43, 1);
     width: 15%;
     border-radius: 3%;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 .resaults{
     width: 100%;
     flex: 25;
     padding-top: 1%;
 }

</style>
