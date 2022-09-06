const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  isRememberNot: state => state.user.isRemember,
  userInfo: state => state.user.userInfo,
  token: state => state.user.token
}
export default getters
