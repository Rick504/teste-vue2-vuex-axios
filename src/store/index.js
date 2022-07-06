import Vue from 'vue'
import Vuex from 'vuex'
// import { moduleA } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        teste: 'name'
    },
    mutations: {},
    actions: {},
    modules: {
        // a: moduleA
    }
})
