import { createApp } from 'vue'; 
import App from './App.vue';
import MyComponent from './components/MyComponent.vue';

const app = createApp(App);

app.component('MyComponent', MyComponent);

app.mount('#app');

const app2 = createApp(MyComponent);

app2.mount('#app2');
