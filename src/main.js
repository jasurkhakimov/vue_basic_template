import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/styles/main.scss';
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api_host';

axios.interceptors.request.use(
  config => {
      const token = store.getters.getAccessToken;
      if (token) {
          config.headers.common["Authorization"] = token;
      }
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
      if (response.status === 200 || response.status === 201) {
          return Promise.resolve(response);
      } else {
          return Promise.reject(response);
      }
  },
  error => {
      if (error.response.status) {
          console.log(error.response)
          switch (error.response.status) {
              case 400:
                  break;
              case 401:
                  if (router.currentRoute.path != '/login') {
                      router.push({ name: 'login', params: { snack: true } });
                  }
                  break;
              case 403:
                  router.push({ name: 'login', params: { snack: true } });
                  break;
              case 404:
                  alert('page not exist');
                  break;
              // case 502:
              //     setTimeout(() => {
              //         router.replace({
              //             path: "/login",
              //             query: {
              //                 redirect: router.currentRoute.fullPath
              //             }
              //         });
              //     }, 1000);
          }
          return Promise.reject(error.response);
      }
  }
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
