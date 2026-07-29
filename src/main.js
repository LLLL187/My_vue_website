

import { createApp } from 'vue'
import App from './App.vue'
import ListDemo from './components/ListDemo.vue'
const app =createApp(App)

app.component("ListDemo",ListDemo)

app.mount('#app')
