<script>
import XButton from "./elements/XButton.vue";
import Panel from "./elements/Panel.vue";
import {ref, reactive} from 'vue';
 export default {
     setup(){
         let peers = ref([
             {
                 id:'123-456-789-abcd',
                 name: 'Xoid',
             },
             {
                 id:'123-9865-878-c98',
                 name: 'alphoid',
             },
             {
                 id:'123-456-abcd-fd88',
                 name: 'astroid',
             },
         ])
         let filtered = ref(peers.value)
         return {peers, filtered}
     },

     components: {
         XButton,
         Panel,
     },
     methods: {
         Filter: function(e){
             let filterQuery = e.target.value
             this.filtered = this.peers.filter((p)=>{
                 return ~p.id.toLowerCase().indexOf(filterQuery) || ~p.name.toLowerCase().indexOf(filterQuery)
             })
         }
     },
     computed: {},
};
</script>

<template>
  <div class="container">
    <div class="search-bar">
        <input placeholder="Filter" @input="Filter($event)" />
        <x-button class="search-button" color="prime">Search</x-button>
    </div>
    <div class="resaults">
      <panel class="search-resault" color="sec" v-for="peer in filtered">
          <template #main>
              <div class="feature">
                  <span class="key">UUID:</span>
                  <span class="val">{{peer.id}}</span>
              </div>
              <div class="feature">
                  <span class="key">Name:</span>
                  <span class="val">{{peer.name}}</span>
              </div>
          </template>
          <template #side>
              <x-button class="connect-button" color="prime">Connect</x-button>
          </template>
      </panel>
    </div>
  </div>
</template>

<style scoped>
  .container {
      width: 97%;
      min-height: 95%;
      padding: 1%;
      display: flex;
      flex-direction: column;
  }

  .search-bar {
      display: flex;
      flex-direction: row;
      width: 80%;
      justify-content: space-between;
      align-self: center;
      flex: 8;
  }

  .search-bar > input {
      width: 70%;
      background-color: rgba(38, 40, 43, 1);
      border: none;
      color: rgba(95, 133, 219, 0.26);
      align-self: stretch;
  }

  .search-button {
      width: 15%;
  }

  .resaults {
      padding-top: 3%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      align-self: center;
      width: 80%;
      flex: 92;
  }

 .search-resault{
     width: 97%; /*FIXME: use flex properties instead of fixed width*/
     margin-top: 3%;
 }

 .feature{
     display: flex;
     flex-direction: row;
     margin: 0.5% 0 0.5% 0;
 }
 .key{
     margin-right: 2%;
     color: rgba(95, 133, 219, 1);
 }
 .val{
     color: white;

 }

 .connect-button{
     width: 100%;
     height: 60%;
 }
</style>
