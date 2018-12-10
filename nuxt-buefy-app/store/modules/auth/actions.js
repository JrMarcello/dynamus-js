const actions = {
  login({}, credentials) {
    return new Promise((resolve, reject) => {
      console.log('credentials', credentials)
      resolve('logged')
    })
  },
  setLoggedUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      console.log('user', user)
      resolve('user set')
    })
  },
  logout({}) {
    return new Promise(resolve => {
      console.log('logout')
      resolve('dislogged')
    })
  }
}

export default actions
