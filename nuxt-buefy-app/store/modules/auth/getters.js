const getters = {
  loggedInUser: state => {
    return state.loggedInUser
  },
  isAuthenticated: state => {
    return !!state.loggedInUser
  }
}

export default getters
