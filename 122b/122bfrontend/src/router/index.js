import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Shop from '../views/Shop.vue'
import Search from '../views/Search.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
