import {createApp} from 'vue'
import App from './App.vue'
import About from './Pages/About.vue';
import Posts from './Pages/Posts.vue';
import Home from './Pages/Home.vue';
import NotFound from './Pages/NotFound.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import SingiePost from './Pages/SingiePost.vue';
import PostComponent from './Pages/PostComponent.vue';
import ProductComponent from './Pages/ProductComponent.vue';


const routes = [ 
   {path: '/', component: Home}, 
   {path: '/about', component: About},
   {path: '/posts', component: Posts, children: [
      {path: ':id', component: SingiePost},
   ]},
   {path: '/:productName+', component: ProductComponent},
   {path: '/:id(\\d+)', component: PostComponent},
   // {path: '/posts/:id', component: SingiePost},
   {path: '/:pathMatch(.*)', component: NotFound}
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
   strict: true
});

const app = createApp(App);
app.use(router)
app.mount('#app');






// import { createApp } from 'vue'; 
// import App from './App.vue';
// import TemplateSyntax from './components/TemplateSyntax.vue';
// import ComputedComponent from './components/ComputedComponent.vue';
// import ClassComponent from './components/ClassComponent.vue';
// import StyleComponent from './components/StyleComponent.vue';
// import ConditionalComponent from './components/ConditionalComponent.vue';
// import ListRendering from './components/ListRendering.vue';
// import EventHandling from './components/EventHandling.vue';
// import Forminput from './components/Forminput.vue';
// import WatchComponent from './components/WatchComponent.vue';
// import WatchEffctComponent from './components/WatchEffctComponent.vue';

// const app = createApp(App);

// app.directive('focus', {
//    mounted(el, binding, vNode, prevVnode) {
//       console.log(binding);
      
//       el.style.borderColor = 'yellow';

//    }
// })

// app
//    .component('TemplateSytax', TemplateSyntax)
//    .component('ComputedComponent', ComputedComponent)
//    .component('ClassComponent', ClassComponent);

// app.component('StyleComponent', StyleComponent);
// app.component("ConditionalComponent", ConditionalComponent);
// app.component('ListRendering', ListRendering);
// app.component('EventHandling', EventHandling);
// app.component('Forminput', Forminput);
// app.component('WatchComponent', WatchComponent);
// app.component('WatchEffctComponent',WatchEffctComponent)
// app.mount('#app');

