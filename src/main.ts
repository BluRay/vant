//import './assets/main.css'
import 'vant/lib/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import { createPinia } from 'pinia'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(createPinia())

app.mount('#app')
