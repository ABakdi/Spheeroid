<script>
import XButton from "./elements/XButton.vue";
import Panel from "./elements/Panel.vue";
import {ref, reactive} from 'vue';
 export default {
     setup(){
         let connected = ref([
             {
                 id:'123-456-789-abcd',
                 name: 'Xoid',
                 requestedBy: 'me',
                 connectedAt:'1-3-2022 12:12',
                 traffic: "Up: 2MB| Down: 6GB"
             },
             {
                 id:'123-9865-878-c98',
                 name: 'alphoid',
                 requestedBy: 'me',
                 connectedAt:'1-3-2022 00:00',
                 traffic: "Up: 990MB| Down: 150KB"
             },
             {
                 id:'123-456-abcd-fd88',
                 name: 'astroid',
                 requestedBy: 'remote',
                 connectedAt:'1-3-2022 04:20',
                 traffic: "Up: 20GB| Down: 6.67GB"
             },
         ])
         let my_requests = true
         let remote_requests = true
         let filtered = ref(connected.value)
         let filterQuery = ''
         return {connected, filtered, my_requests, remote_requests}
     },

     components: {
         XButton,
         Panel,
     },
     methods: {
         Filter: function(e){
             if(e.target.type == 'text')
                 this.filterQuery = e.target.value

             // filter by request type
             let filtered = this.connected.filter((p)=>{
                 return !(p.requestedBy == 'remote' && !this.remote_requests || p.requestedBy == 'me' && !this.my_requests)
             })

             // filter by filter query
             // ** only if there is a query ** user typed somthing in filter input
             if(this.filterQuery){
                filtered = filtered.filter((p)=>{
                    return ~p.id.toLowerCase().indexOf(this.filterQuery) || ~p.name.toLowerCase().indexOf(this.filterQuery)
                })
             }

             this.filtered = filtered

         }
     },
     computed: {},
};
</script>

<template>
  <div class="container">
    <div class="search-bar">
        <input placeholder="Filter" @input="Filter($event)" />
        <div class="check">
            <div class="check-el my-req">
                <input name="myReq" type="checkbox" :checked="my_requests" v-model="my_requests" @change="Filter($event)">
                <label for="myReq">my requests</label>
            </div>
            <div class="check-el rem-req">
                <input name="remReq" type="checkbox" :checked="remote_requests" v-model="remote_requests" @change="Filter($event)">
                <label for="remReq">remote requests</label>
            </div>
        </div>
    </div>
    <div class="resaults">
        <panel class="search-resault" v-for="peer in filtered" :color="peer.requestedBy == 'remote'? 'prime':'sec'">
            <template #main>
                <div class="feature">
                    <span class="key">UUID:</span>
                    <span class="val">{{peer.id}}</span>
                </div>
                <div class="feature">
                    <span class="key">Name:</span>
                    <span class="val">{{peer.name}}</span>
                </div>
                <div class="feature">
                    <span class="key">Connected At:</span>
                    <span class="val">{{peer.connectedAt}}</span>
                </div>
                <div class="feature">
                    <span class="key">Traffic:</span>
                    <span class="val">{{peer.traffic}}</span>
                </div>
            </template>
            <template #side>
                    <x-button class="action" color="sec">Disconnect</x-button>
                    <x-button class="action" color="prime">Browse</x-button>
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
      justify-content: space-between;
      width: 80%;
      align-self: center;
      flex: 1;
  }

  .search-bar>input {
      width: 65%;
      background-color: rgba(38, 40, 43, 1);
      border: none;
      color: white;
      align-self: stretch;
      padding-left: 5px;
  }

  .search-bar>input::placeholder {
      color: rgba(95, 133, 219, 0.26);
  }

 .check{
     margin: 0 10% 0 2px;
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 20%;
 }
 .check-el{
     display: flex;
     justify-content: flex-start;
     align-items: center;
     width: 100%;
     margin: 1px;
 }

 .check-el input{
     margin: 4px;
     min-width: 20px;
 }

 .rem-req{
     background-color: rgba(38, 40, 43, 0.7);
 }

 .my-req{
     background-color: rgba(27, 35, 46, 1);
 }



 .resaults {
     padding-top: 3%;
     display: flex;
     flex-direction: column;
     justify-content: start;
     align-items: center;
     align-self: center;
     width: 80%;
     flex: 95;
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
 .action-buttons{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }
 .action{
     width: 100%;
     height: 35%;
 }

</style>
