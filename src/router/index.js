import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/Home.vue"
import GettingStarted from "../pages/GettingStarted/GettingStarted.vue"
import Dashboard from "../pages/Dashboard/Dashboard.vue"
import Settings from "../pages/Settings/Settings.vue"
import WhatsNew from "../pages/WhatsNew/WhatsNew.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'gettingStarted',
        name: 'GettingStarted',
        meta:{
          tab: 'gettingStarted'
        },
        component: GettingStarted
      },
      {
        path: 'Dashboard',
        name: 'Dashboard',
        meta:{
          tab: 'Dashboard'
        },
        component: Dashboard,
      },
      {
        path: 'Settings',
        name: 'Settings',
        meta:{
          tab: 'Settings'
        },
        component: Settings,
      },
      {
        path: 'WhatsNew',
        name: "WhatsNew",
        meta:{
          tab: 'WhatsNew'
        },
        component: WhatsNew
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
