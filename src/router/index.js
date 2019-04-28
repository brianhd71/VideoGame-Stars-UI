import Vue from 'vue'
import Router from 'vue-router'
import VGStars from '@/components/VGStars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VGStars',
      component: VGStars
    }
  ]
})
