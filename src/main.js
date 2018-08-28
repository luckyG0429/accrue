// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


Vue.component('my-text',{
  template: '<mark>hello zaizai</mark>'
})


window.onload = function(){
  let base = 750/24;
  document.documentElement.style.fontSize = window.innerWidth/base;
  document.body.style.fontSize = window.innerWidth/base;

}
window.THREE = require('three')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
