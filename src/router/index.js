import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../views/Films.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/api/films',
    name: 'Films',
    component: Films
  },
]

const router = new VueRouter({
  routes
})

export default router
