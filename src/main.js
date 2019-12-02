import Vue from 'vue'
import App from './App.vue'

import {headerjs} from "./assets/js/js";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: function () {
    headerjs();
  },
}).$mount('#app')
