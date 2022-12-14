import Layout from '@/layout'
export default {
  path:'/manage-storage-out',
  component: Layout,
  name:'manage-storage-out',
  redirect: '/manage-storage-out/list-out',
  meta: { title: '出货管理', icon: 'dashboard' },
  children:[{
    path:'list-out',
    name:'list-out',
    component: () => import('@/views/ManageStorageOut/ListOutList'),
    meta: { title: '出库单', icon: 'dashboard' },

  },{
    path:'task-picking',
    name:'list-out-task-picking',
    component: () => import('@/views/ManageStorageOut/TaskPicking'),
    meta: { title: '拣货任务', icon: 'dashboard' },

  },{
    path:'manage-task-transfer',
    name:'manage-task-transfer',
    component: () => import('@/views/ManageStorageOut/ManageTaskTransfer'),
    meta: { title: '交接任务', icon: 'dashboard' },

  }]
}