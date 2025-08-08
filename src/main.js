import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import { createPinia } from "pinia";
import myUi from '@/lib/myUi';

const app = createApp(App);
app.use(createPinia());
app.use(myUi);
app.use(router);
app.mount('#app');
