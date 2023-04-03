import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Profile from './views/profile'
import Home from './views/home'
import BlogPost from './views/blog-post'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'BlogPost',
      path: '/blog-post',
      component: BlogPost,
    },
  ],
})
