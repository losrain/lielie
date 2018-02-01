import * as types from '../mutation_types'
let state = {
  pageClass: ''
}
let getters = {
  PAGE_CLASS: state => state.pageClass
}
let mutations = {
  [types.SET_PAGE_CLASS](state, item) {
    state.pageClass = item
  },
}
let actions = {
  setPageClass({
    commit
  }, item) {
    commit(types.SET_PAGE_CLASS, item);
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
