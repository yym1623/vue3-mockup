import { createWebHistory, createRouter } from 'vue-router'


import Home from "@/layout/Home.vue"

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: Home, name: 'Home' }

  ],

  // scrollBehavior(to, from, savedPosition) {
  //   return { top : 0, behavior: 'smooth' }
  // },
})

export default router