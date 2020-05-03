import Vue from 'vue'
import VueRouter from 'vue-router'
//import App from '../App.vue'
import Films from '@/views/Films.vue';
import FilmDetails from '@/components/FilmDetails.vue';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/films',
    name: 'films',
    component: Films
  },
  {
    path: '/films/:id',
    name: 'film',
    component: FilmDetails,
    props: castRouteParamsId
  },
]

function castRouteParamsId(route) {
  return {
    id: Number(route.params.id),
  }; 
}
const router = new VueRouter({
  routes
})

export default router
