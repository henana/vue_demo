import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/a'
import B from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
   {
      path: '/b',
      name: 'B',
      component: B
    },
    {
      path: '/a',
      name: 'A',
      component: A
    }
  ]
})
