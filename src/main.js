import { createApp } from 'vue'
import './assets/scss/general.scss'
import App from './App.vue'
import "bootstrap" 
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far,fab,fas);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')