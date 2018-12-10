const getters = {
  loggedUser: state => {
    return state.logged_user
  },
  isAuthenticated: state => {
    return !!state.logged_user
  }
}

export default getters
