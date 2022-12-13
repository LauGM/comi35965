import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  },
  {
    path: '/usuario/:id',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsuarioView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsuariosView.vue')
  },
  {
    path: '/ciclo',
    name: 'ciclo',
    component: () => import(/* webpackChunkName: "about" */ '../views/CicloView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
