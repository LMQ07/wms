import Layout from '@/layout'
export default {
  path:'/manage-storage-in',
  component: Layout,
  name:'manage-storage-in',
  redirect: '/manage-storage-in/list-in/list',
  meta: { title: '入库管理', icon: 'dashboard' },
  children:[{
    path:'/list-in/list',
    name:'list-in-list',
    component: () => import('@/views/ManageStorageIn/ListInList'),
    meta: { title: '入库单', icon: 'dashboard' },

  },{
    path:'/list-in/task-receive',
    name:'task-receive',
    component: () => import('@/views/ManageStorageIn/TaskReceive'),
    meta: { title: '收货任务', icon: 'dashboard' },

  },{
    path:'/list-in/task-add',
    name:'task-add',
    component: () => import('@/views/ManageStorageIn/TaskAdd'),
    meta: { title: '上架任务', icon: 'dashboard' },

  }]
}