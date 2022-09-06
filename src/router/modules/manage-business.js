import Layout from '@/layout'
export default {
  path:'/manage-business',
  component: Layout,
  name:'manage-business',
  redirect: '/manage-business/goods-owner',
  meta: { title: '商务管理', icon: 'dashboard' },
  children:[{
    path:'goods-owner',
    name:'goods-owner',
    component: () => import('@/views/ManageBusiness/GoodsOwner'),
    meta: { title: '货主管理', icon: 'dashboard' },

  },{
    path:'task-picking',
    name:'task-picking',
    component: () => import('@/views/ManageBusiness/TaskPicking'),
    meta: { title: '承运商管理', icon: 'dashboard' },

  },]
}