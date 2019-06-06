import Vue from "vue";
import App from "./App.vue";

// import MoorUI from "./index.js";
// Vue.use(MoorUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
