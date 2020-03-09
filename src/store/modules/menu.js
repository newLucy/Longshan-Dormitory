const state = {
  menuList: [],
  manageMenu: [],
  permissionRoute: []
}

const mutations = {
  SET_MENULIST: (state, val) => {
    state.menuList = val
  },
  SET_MANAGEMENU: (state, val) => {
    state.manageMenu = val
  },
  SET_PERMISSIONROUTE: (state, val) => {
    state.permissionRoute = val
  },
  CLEAR_MENUINFO: (state, val) => {
    state.menuList = []
    state.manageMenu = []
    state.permissionRoute = []
  }
}

const actions = {
  getMenuInfo ({commit}, val) {
    return new Promise((resolve, reject) => {
        commit('SET_MENULIST', '')
        resolve(permissionRoute)
        reject(err)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
