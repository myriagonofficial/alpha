import Vue from "vue";
import App from "./App.vue";

if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
  alert(`Ce jeu ne fonctionne pas de manière optimale sur votre navigateur. Nous vous recommandons Firefox ou Chrome.`);
}

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
