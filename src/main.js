import { createApp } from 'vue'; 
import App from './App.vue';
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSytax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);

app.mount('#app');

