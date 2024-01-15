// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
