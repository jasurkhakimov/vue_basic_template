import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios';

Vue.use(Vuex);

const getters = {
  getAccessToken: state => {
    return state.accessToken
  },
  getUser: state => {
    return state.user
  },
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setAccessToken(state, token) {
    state.accessToken = token
    axios.defaults.headers.common['Authorization'] = token
  },
  deleteAccessToken(state) {
    state.accessToken = null;
    state.user = null;
    axios.defaults.headers.common['Authorization'] = null;
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    accessToken: null,
    user: null
  },
  mutations,
  actions: {
  },
  getters,
  modules: {
  }
})
