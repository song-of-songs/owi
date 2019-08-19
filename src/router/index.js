import Vue from 'vue'
import Router from 'vue-router'

// 引入SayHi 这个component
import SayHi from '@/components/SayHi'

import Hello from '@/components/Hello'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 对应此模块页面的url
      path: '/say_hi',

      // Vue.js内部使用的名字，这个路由的名字
      name: 'SayHi',

      // 对应的.vue页面的名字，表示该路由由哪个component来处理
      component: SayHi
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello_world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
