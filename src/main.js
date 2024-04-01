import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVCodeBlock } from '@wdns/vue-code-block';

import App from './App.vue'
import router from './router'
import './index.css'

const VCodeBlock = createVCodeBlock({
    language: 'html',
    copyButton: false,
    maxHeight: '320px',
    theme: 'dark',
});

const app = createApp(App)

app.use(VCodeBlock);
app.use(createPinia())
app.use(router)

app.mount('#app')
