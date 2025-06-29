import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import router from './router'
import HeroIcons from './plugins/heroicons'


const app = createApp(App)
app.use(createPinia())
app.use(HeroIcons)
app.use(router)
app.mount('#app')