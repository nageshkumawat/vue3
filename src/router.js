import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: ()=>import('@/components/HelloWorld.vue')
  },
  {
    name:'product',
    path:'/product',
    component:()=>import('@/components/TestCom.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router