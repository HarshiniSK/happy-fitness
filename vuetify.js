import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import vueGoogleCharts from 'vue-google-charts';

Vue.use(vueGoogleCharts);

Vue.use(Vuetify, {
    iconfront: 'md',
});

export default new Vuetify({});