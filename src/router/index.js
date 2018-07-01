import Vue from 'vue'
import Router from 'vue-router'
import mine from '../views/mine/mine'
import myplan from '../views/my/myplan'
import myworks from '../views/my/myworks'
import mybooks from '../views/my/mybooks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:mine,
      component:mine
    },
    {
      path:'/book',
      name:mybooks,
      component:mybooks
    },
    {
      path:'/life',
      name:myworks,
      component:myworks
    },
    {
      path:'/times',
      name:myplan,
      component:myplan
    }
]
})
