import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import BookPage from '@/components/BookPage'
import SignUp from '@/components/SignUp'
import LogIn from '@/components/LogIn'
import LogOut from '@/components/LogOut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    },
    {
      path: '/book/:slug',
      name: 'BookPage',
      component: BookPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/logout',
      name: 'LogOut',
      component: LogOut
    },
  ]
})
