import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import AddPost from '@/views/AddPost.vue'
import EditPost from '@/views/EditPost.vue'
import Page404 from '@/views/Page404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  {
    path: '/edit-post',
    name: 'edit-post',
    component: EditPost,
    props: true
  },
  {
    path: '/*',
    name: 'page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
