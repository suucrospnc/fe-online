import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
 
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", 
    component: () => import("../views/userManage/index.vue"),
    meta: {
      title: '首页',
    },
  },
]
 
const router = createRouter({
  history: createWebHistory(),
  routes, 
})
 
export default router