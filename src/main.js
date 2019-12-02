import Vue from 'vue'
import App from './App.vue'

import {test123} from "./assets/js/js";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: function () {
    test123();
  },
}).$mount('#app')
