import Layout from '@/layout'
export default {
  path: '/manage-storage',
  component: Layout,
  name: 'manage-storage',
  redirect: '/manage-storage/list',
  meta: { title: '货主管理', icon: 'dashboard' },
  children: [{
    path: 'list',
    name: 'list',
    component: () => import('@/views/ManageStorage/List'),
    meta: { title: '盘点单', icon: 'dashboard' }

  }, {
    path: 'list/details/:id',
    name: 'list/details',
    hidden: true,
    component: () => import('@/views/ManageStorage/List/details'),
    meta: { title: '新增盘点单', icon: 'dashboard' }

  }, {
    path: 'list/list-detail/:id',
    name: 'list/list-detail',
    hidden: true,
    component: () => import('@/views/ManageStorage/List/listDetail'),
    meta: { title: '查看盘点详情', icon: 'dashboard' }

  }, {
    path: 'list-task',
    name: 'list-task',
    component: () => import('@/views/ManageStorage/ListTask'),
    meta: { title: '盘点任务', icon: 'dashboard' }

  }, {
    path: 'storage-lose-profit',
    name: 'storage-lose-profit',
    component: () => import('@/views/ManageStorage/StorageLoseProfit'),
    meta: { title: '库存损益', icon: 'dashboard' }

  }, {
    path: 'latest-storage',
    name: 'latest-storage',
    component: () => import('@/views/ManageStorage/LatestStorage'),
    meta: { title: '实时库存', icon: 'dashboard' }

  }]
}
