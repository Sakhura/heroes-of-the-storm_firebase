import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetalleHeroe from '../views/DetalleHeroe.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/heroes',
    name: 'Heroes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HeroesView.vue')
  },
  {
    path: '/detalle/:nombre',
    name: 'DetalleHeroe',
    component: DetalleHeroe,
    meta:{
      login: true
    }
  },
  {
    path: '/*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => { 
  let user = firebase.auth().currentUser
  let authRequired = to.matched.some(route => route.meta.login) 
  if (!user && authRequired) {
    next('/')
  } else {
    next()
  }
})
export default router
