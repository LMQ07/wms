import Cookies from 'js-cookie'

const state = {
  // sidebar: {
  //   opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
  //   withoutAnimation: false
  // },
  navArr:[{title:'工作台',path:'/dashboard'}],
  currentPage:{},
  currentIndex:0,
  device: 'desktop'
}

const mutations = {
  ADD_NAVBARITEM:(state,newitem) => {
    state.navArr.push(newitem)
  },
  DELET_NAVBARITEM:(state,index) => {
    state.navArr.splice(index,1)
  },
  ADD_CURRENTPAGE:(state,newitem)=>{
    state.currentPage = newitem
  },
  CHANGE_CURRENTINDEX:(state,num)=>{
    state.currentIndex = num
  }
  // TOGGLE_SIDEBAR: state => {
  //   state.sidebar.opened = !state.sidebar.opened
  //   state.sidebar.withoutAnimation = false
  //   if (state.sidebar.opened) {
  //     Cookies.set('sidebarStatus', 1)
  //   } else {
  //     Cookies.set('sidebarStatus', 0)
  //   }
  // },
  // CLOSE_SIDEBAR: (state, withoutAnimation) => {
  //   Cookies.set('sidebarStatus', 0)
  //   state.sidebar.opened = false
  //   state.sidebar.withoutAnimation = withoutAnimation
  // },
  // TOGGLE_DEVICE: (state, device) => {
  //   state.device = device
  // }
}

const actions = {
  // toggleSideBar({ commit }) {
  //   commit('TOGGLE_SIDEBAR')
  // },
  // closeSideBar({ commit }, { withoutAnimation }) {
  //   commit('CLOSE_SIDEBAR', withoutAnimation)
  // },
  // toggleDevice({ commit }, device) {
  //   commit('TOGGLE_DEVICE', device)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
