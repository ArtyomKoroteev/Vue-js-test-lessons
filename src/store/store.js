/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts.js';

Vue.use(Vuex);
export default new Vuex.Store({
  //декомпозиция логики VUEEX стора
  modules: {
    posts,
  },
});
