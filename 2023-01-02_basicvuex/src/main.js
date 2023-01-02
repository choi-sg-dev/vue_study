/*import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

Vue.use('Vuex');
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')*/







import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

//createApp.use('Vuex');
//createApp.config.productionTip = false;

// const app = createApp(App)
// app.mount('#app');

// new createApp({
//   render: h=> h(App),
//   store
// })

createApp(App).use(store).mount("#app");
