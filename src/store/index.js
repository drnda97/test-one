import Vuex from 'vuex';
import Vue from 'vue';
import gists from './modules/gists';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        gists
    }
})