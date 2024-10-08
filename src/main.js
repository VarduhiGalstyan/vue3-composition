import { createApp } from 'vue'; 
import App from './App.vue';
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassComponent from './components/ClassComponent.vue';
import StyleComponent from './components/StyleComponent.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSytax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);
app.component('ClassComponent', ClassComponent);
app.component('StyleComponent', StyleComponent);

app.mount('#app');

