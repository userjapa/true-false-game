import Vue from 'vue'
import Router from 'vue-router'

import Create from '@/pages/Create'
import Preview from '@/pages/Preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Create',
      component: Create
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
