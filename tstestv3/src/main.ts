import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// can import css here

createApp(App).use(store).use(router).mount('#app')
