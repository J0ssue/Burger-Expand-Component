import Vue from 'vue'
import App from './App.vue'
import './sass/main.scss';

import BurgerExpand from "./components/BurgerExpand.vue";

Vue.config.productionTip = false

Vue.component('burger-expand', BurgerExpand);

new Vue({
  render: h => h(App),
}).$mount('#app')