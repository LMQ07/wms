const getters = {
  sidebar: state => state.app.sidebar,
  navArr:state => state.app.navArr,
  currentPage:state => state.app.currentPage,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
