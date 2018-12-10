import Vuex from 'vuex'
import auth from './modules/auth'

export default () => {
  return new Vuex.Store({
    modules: {
      auth
    }
  })
}
