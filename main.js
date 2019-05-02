// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Menu,Submenu, MenuItem,MenuItemGroup,Radio, RadioGroup,RadioButton,Table,TableColumn,Input,Button,Popover,Tag,Breadcrumb,BreadcrumbItem,} from 'element-ui';



Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
