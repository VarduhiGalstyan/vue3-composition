import { createApp } from 'vue'; 
import App from './App.vue';
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSytax', TemplateSyntax);

app.mount('#app');

