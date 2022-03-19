import { createApp } from 'vue'
import App from './App.vue'

// configure font awesom
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {fas}  from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import {far}  from '@fortawesome/free-regular-svg-icons';
library.add(far)

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch()
import store from './store'
createApp(App)
// add font-awesome components
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .mount('#app')
