
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import { MdButton,MdContent,MdTabs }from 'vue-material/dist/components'
import App from './App.vue';

import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';

require('./bootstrap');
window.Vue = require('vue');
window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

Vue.use(VueRouter);
Vue.prototype.axios = axios;


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('Example', require('./components/Example.vue'));//
//Vue.config.productionTip = false;

const router = new VueRouter({
    mode:'history',
    routes: routes
})
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');

