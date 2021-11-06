import Vue from 'vue'
import App from './App.vue'
import store from './store';
import css from './assets/style/main.css'
import Pagination from 'vue-pagination-2';  
Vue.component('pagination', Pagination);
Vue.config.productionTip = false

new Vue({
  css,
  store,
  render: h => h(App),
}).$mount('#app')
