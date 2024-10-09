import { createApp } from 'vue'; 
import App from './App.vue';
import Counter from './components/Counter.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassComponent from './components/ClassComponent.vue';
import StyleComponent from './components/StyleComponent.vue';
import ConditionalComponent from './components/ConditionalComponent.vue';
import ListRendering from './components/ListRendering.vue';
import EventHandling from './components/EventHandling.vue';
import Forminput from './components/Forminput.vue';
import WatchComponent from './components/WatchComponent.vue';
import WatchEffctComponent from './components/WatchEffctComponent.vue';

const app = createApp(App);

app.component('Counter', Counter);
app.component('TemplateSytax', TemplateSyntax);
app.component('ComputedComponent', ComputedComponent);
app.component('ClassComponent', ClassComponent);
app.component('StyleComponent', StyleComponent);
app.component("ConditionalComponent", ConditionalComponent);
app.component('ListRendering', ListRendering);
app.component('EventHandling', EventHandling);
app.component('Forminput', Forminput);
app.component('WatchComponent', WatchComponent);
app.component('WatchEffctComponent',WatchEffctComponent)
app.mount('#app');

