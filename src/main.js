import { createApp } from 'vue'
import App from './App.vue'
import InlineSvg from 'vue-inline-svg';
import './assets/main.css'

const app = createApp(App)
app.component('inline-svg', InlineSvg);
app.mount('#app')
