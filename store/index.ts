export const state = () => ({
  lastLogin: 0
})

export const mutations = {
  setLastLogin(state, val) {
    state.lastLogin = val
  }
}
