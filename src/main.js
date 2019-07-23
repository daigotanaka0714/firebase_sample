import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDuFBdU_Ty_icyz-NACraCKSWmqI82Cdr4",
  authDomain: "fir-sample-187c1.firebaseapp.com",
  databaseURL: "https://fir-sample-187c1.firebaseio.com",
  projectId: "fir-sample-187c1",
  storageBucket: "",
  messagingSenderId: "15146301276",
  appId: "1:15146301276:web:9ac5757230ec8c1b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
