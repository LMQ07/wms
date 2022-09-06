const getters = {
  sidebar: state => state.app.sidebar,
  navArr:state => state.app.navArr,
  currentPage:state => state.app.currentPage,
  device: state => state.app.device,
  isRememberNot: state => state.user.isRemember,
  userInfo: state => state.user.userInfo,
  token: state => state.user.token
}
export default getters
