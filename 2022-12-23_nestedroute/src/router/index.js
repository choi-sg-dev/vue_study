import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/admin/AdminView.vue'
import ProductList from '../views/admin/ProductList.vue'
import ProductInsert from '../views/admin/ProductInsert.vue'
import ProductEdit from '../views/admin/ProductEdit.vue'
import NotFound from '../views/NotFound.vue'
import LoginView from "../views/LoginView.vue"

Vue.use(VueRouter)

/*export default new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      children : [
        {path: 'list', name: 'productlist', component: ProductList},
        {path: 'insert', name: 'productinsert', component: ProductInsert},
        {path: 'edit/:id', name: 'productedit', component: ProductEdit},
      ],
      //beforeEnter(to, from, next){
      //  console.log("beforeEnter : " + "to: ", to, "from: ", from);
      //  next();
      //}
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
});*/

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      children : [
        {path: 'list', name: 'productlist', component: ProductList},
        {path: 'insert', name: 'productinsert', component: ProductInsert},
        {path: 'edit/:id', name: 'productedit', component: ProductEdit},
      ],
      //beforeEnter(to, from, next){
      //  console.log("beforeEnter : " + "to: ", to, "from: ", from);
      //  next();
      //}
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
});

export default router

router.beforeEach((to, from, next) => {
  if(to.path == "/admin"){
    console.log("beforeEach : " + "to : ", to, "from: ", from);
    // next(false) // 이동 취소
    next("/login")
  }else{
    next();
  }
})


