import Vue from "vue";
import PizzaApp from "./components/PizzaApp.vue";
import store from "./store";
import './assets/css/main.css'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(PizzaApp)
}).$mount("#app");
