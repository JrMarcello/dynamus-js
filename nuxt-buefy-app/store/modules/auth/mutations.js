import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGGED_USER](state, user) {
    state.logged_user = user
  }
}

export default mutations
