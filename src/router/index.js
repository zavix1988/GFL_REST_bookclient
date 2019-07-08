import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import BookPage from '@/components/BookPage'

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
  ]
})
