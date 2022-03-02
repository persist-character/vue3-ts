import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { routeData } from '@/utils/routeData'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/home'
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

routeData.forEach(item=>{
  routes.push({
    path:item.path,
    name:item.name,
    component:()=>import(`../views/${item.component}.vue`)
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
