import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGGEDIN_USER](state, user) {
    state.loggedInUser = user
  }
}

export default mutations
