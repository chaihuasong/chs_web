import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import {headerjs} from "./assets/js/js";

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  mounted: function () {
    headerjs();
  },
}).$mount('#app')
