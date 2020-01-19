import * as M from './mutation_types'
import Vue from 'vue'

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
  },

  [M.SET_INCREMENT](state, {payload: data}) {
    let post = state.posts.find(post => post.id == data)
    post.claps++
  },

  // [M.DELETE_POST](state, {payload: data}) {
  //   let post = state.posts.find(post => post.id == data)
  //   Vue.delete(state.posts, state.posts.indexOf(post))
  // },

  // [M.SET_COUNT_MINUS](state) {
  //   state.totalCount--
  // },

  // [M.ADD_POST](state, {payload: data}) {
  //   state.posts.push(data)
  // },

  // [M.SET_COUNT_PLUS](state) {
  //   state.totalCount++
  // },

  [M.EDIT_POST](state, {payload: data}) {
    let post = state.posts.find(post => post.id == data.id)
    Vue.set(state.posts, state.posts.indexOf(post), data)
  }
}