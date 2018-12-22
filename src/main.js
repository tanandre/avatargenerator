import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

router.afterEach((to) => {
  store.dispatch('generate', Number(to.params.id));
});

if (Number(router.currentRoute.params.id) !== 0) {
  store.dispatch('generate', router.currentRoute.params.id);
}
