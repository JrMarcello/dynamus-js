import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGGEDIN](state, user) {
    state.loggedIn = user
  }
}

export default mutations
