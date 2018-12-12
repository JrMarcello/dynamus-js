const getters = {
  loggedIn: state => {
    return state.loggedIn
  },
  isloggedIn: state => {
    return !!state.loggedIn
  }
}

export default getters
