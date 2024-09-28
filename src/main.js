import { createApp } from 'vue'
import App from './App.vue'
import InlineSvg from 'vue-inline-svg';
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import './assets/main.css'

const app = createApp(App)
app.use(FloatingVue);
app.component('inline-svg', InlineSvg);
app.mount('#app')
