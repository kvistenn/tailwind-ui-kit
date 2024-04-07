import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVCodeBlock } from '@wdns/vue-code-block';
import piniaPersist from 'pinia-plugin-persist';

import App from './App.vue';
import router from './router';
import './index.css';

const app = createApp(App);
const pinia = createPinia();
const VCodeBlock = createVCodeBlock({
    language: 'html',
    copyButton: false,
    maxHeight: '320px',
    theme: 'dark',
});

pinia.use(piniaPersist, {
    key: 'pinia',
    paths: ['settings'],
    storage: localStorage,
});

app.use(VCodeBlock);
app.use(pinia);
app.use(router);

app.mount('#app');
