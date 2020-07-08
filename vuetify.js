import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import vueGoogleCharts from 'vue-google-charts';
import 'es6-promise/auto'
import Vuex from 'vuex'
import VueFirestore from 'vue-firestore';

Vue.use(Vuex);
Vue.use(VueFirestore);
Vue.use(vueGoogleCharts);

Vue.use(Vuetify, {
    iconfront: 'md',
});

export default new Vuetify({});