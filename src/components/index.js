const requireComponent = require.context('./',true,/\.vue$/)
const res = requireComponent.keys().map(requireComponent)
export default (Vue) => {
  res.forEach(item => {
    console.log(item);
    Vue.component(item.default.name,item.default)
  })
}