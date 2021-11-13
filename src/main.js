import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./assets/css/app.css";
import Vue from "vue";
import App from "./App.vue";
import UUID from "vue-uuid";
import router from './router'

Vue.use(UUID);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
