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
import LeftSideBar from './components/LeftSideBar.vue';
import RightSideBar from './components/RightSideBar.vue';
import SearchUser from './Pages/SearchUser.vue';


const routes = [ 
   {path: '/', 
   //    components: {
   //    default: Home,
   //    // LeftSideBar,
   //    // RightSideBar
   //    LeftSideBar: About,
   //    RightSideBar,
   // }
   component: Home,
   props: {name: 'Leela web dev'}
   }, 
   {path: '/about/:id', components: {
      default: About,
      RightSideBar: LeftSideBar,
      LeftSideBar: RightSideBar
     },
     props: {default: true, RightSideBar:true, LeftSideBar: true}
   },
   {path: '/search', component: SearchUser, props: route => ({query: route.query.q})},
   {path: '/articles', name: 'posts', component: Posts, children: [
      {path: ':id', name: 'singlePost', component: SingiePost, props: true},
   ]},
   // {path: '/:productName+', component: ProductComponent},
   // {path: '/:id(\\d+)', component: PostComponent},
  
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

