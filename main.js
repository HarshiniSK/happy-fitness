import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import './components/firebaseInit';
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false;

Vue.use(VueFirestore);

let app;
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            VueFirestore,
            vuetify,
            render: h => h(App)
        }).$mount('#app')
    }
});