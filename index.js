import Vue from 'vue'
import Router from 'vue-router'
import layout from "../layout/layout"
import nav1 from "../components/nav1"
import navd2 from "../components/nav-demo2"
import list from "../components/list"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
            path: 'list/:id',
            name: 'list',
            component: list,
            meta: {
              title: '列表',
              need_log: false
            }
        }
      ]
    },

    {
      path: '/nav1',
      name: 'nav1',
      component: nav1
    },
    {
      path: '/navd2',
      name: 'navd2',
      component: navd2
    },
  ]
})
