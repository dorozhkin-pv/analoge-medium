import * as M from './mutation_types'
//import Vue from 'vue'

export default {
  [M.GET_POSTS](state, {payload: data}) {
    state.posts = data.response
    state.totalCount = data.totalCount
  },

  [M.GET_USERS](state, {payload: data}) {
    state.users = data
  },

  [M.SET_USER](state, {payload: data}) {
    state.loggedUser = data
  },

  [M.DELETE_LOGGED_USER](state) {
    state.loggedUser = null
  }
}