import { serviceApi, serviceIps } from '@/utils/request'

// 获取盘点单列表
export function getCheckList(params) {
  return serviceIps({
    url: 'check/pageDetail',
    method: 'GET',
    params
  })
}

// 获取全部货主
export function getOwnerList() {
  return serviceApi({
    url: 'owner/list'
  })
}

// 获取盘点仓库
export function getWarehouseList(params) {
  return serviceApi({
    url: 'warehouse/list',
    params
  })
}

// 获取盘点仓库下的库区
export function getWarehouseAreaList(params) {
  return serviceApi({
    url: 'area/list',
    params
  })
}

// 获取下一个编码
export function getNextCodeFactory(name) {
  return serviceApi({
    url: `codeFactory/next/${name}`
  })
}

// 新增盘点单
export function addCheck(data) {
  return serviceIps({
    url: 'check',
    method: 'POST',
    data
  })
}

// 取消盘点单
export function cancelCheck(data) {
  return serviceIps({
    url: 'check/cancel',
    method: 'PUT',
    data
  })
}

// 生成盘点任务
export function createCheckTask(data) {
  return serviceIps({
    url: 'check/task',
    method: 'POST',
    data
  })
}

// 获取盘点详情
export function getCheckInfo(id, params) {
  return serviceIps({
    url: `check/detail/${id}`,
    params
  })
}

// 获取盘点清单
export function getCheckListList(params) {
  return serviceIps({
    url: 'checkList/pageDetail',
    params
  })
}

// 获取库存
export function getStock(params) {
  return serviceIps({
    url: 'stock/pageDetail',
    params
  })
}
