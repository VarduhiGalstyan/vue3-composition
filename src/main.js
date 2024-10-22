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
import { createPinia } from 'pinia';


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
   beforeEach(to, from) {
      console.log('before Enter');
      
   }
   }, 
   {path: '/about', components: {
      default: About,
      RightSideBar: LeftSideBar,
      LeftSideBar: RightSideBar
     },
     props: {default: true, RightSideBar:true, LeftSideBar: true}
   },
   {path: '/search', component: SearchUser, props: (route) => ({query: route.query.q})},
   {path: '/articles', name: 'posts', component: Posts, children: [
      {path: ':id', name: 'singlePost', component: SingiePost, props: true},
   ]},
   // {path: '/:productName+', component: ProductComponent},
   // {path: '/:id(\\d+)', component: PostComponent},
  
   // {path: '/posts/:id', component: SingiePost},
   {path: '/:pathMatch(.*)', component: NotFound}
];

function auth1(to,from){
   console.log('auth1');
   return true;
   
}

function auth2() {
   console.log('auth2');
   return true;
   
}

const router = createRouter({
   history: createWebHashHistory(),
   routes,
   strict: true
});

function authAccess(to) {
   console.log('accessing');
   
   return new Promise((resolve, reject) => {
      setTimeout(() =>{
         if(to.path.includes('articles') || to.path.includes('notfound')){
            resolve(true);
         }else{
            resolve(false);
         }
      }, 500 );
   });
}

router.beforeEach(async(to, from, next) => {
   console.log('beforeEach');
   next(true);
});

router.afterEach((to, from) => {
   console.log('after Each');
});
router.beforeResolve(async(to)=> {
   if(to.path.includes('/articles')) {
      // await authAccess(to);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    app.provide ( 'postsData', await response.json());
   }
});

const pinia = createPinia();
const app = createApp(App);
app.use(router)
app.use(pinia);
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

