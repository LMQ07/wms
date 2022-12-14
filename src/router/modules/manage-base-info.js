import Layout from '@/layout'
export default {
  path:'/manage-base-info',
  component: Layout,
  name:'manage-base-info',
  redirect: '/manage-base-info/warehouse',
  meta: { title: '基础信息管理', icon: 'dashboard' },
  children:[{
    path:'warehouse',
    name:'warehouse',
    component: () => import('@/views/ManageBaseInfo/Warehouse'),
    meta: { title: '仓库管理', icon: 'dashboard' },

  },{
    path:'area',
    name:'area',
    component: () => import('@/views/ManageBaseInfo/Area'),
    meta: { title: '库区管理', icon: 'dashboard' },

  },{
    path:'location',
    name:'location',
    component: () => import('@/views/ManageBaseInfo/Location'),
    meta: { title: '库位管理', icon: 'dashboard' },

  },{
    path:'location-view',
    name:'location-view',
    component: () => import('@/views/ManageBaseInfo/locationView'),
    meta: { title: '库位视图', icon: 'dashboard' },

  },{
    path:'goods',
    name:'goods',
    component: () => import('@/views/ManageBaseInfo/Goods'),
    meta: { title: '货品管理', icon: 'dashboard' },

  },{
    path:'goods-type',
    name:'goods-type',
    component: () => import('@/views/ManageBaseInfo/GoodStype'),
    meta: { title: '货品类型管理', icon: 'dashboard' },

  }]
}