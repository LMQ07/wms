import { serviceApi, serviceIps } from '@/utils/request'

// 任务交接
export function getTransferList(params) {
  return serviceIps({
    url: 'handover/pageDetail',
    params
  })
}

// 出库单列表获取
export function getOutBoundList(params) {
  return serviceIps({
    url: 'outbound/pageDetail',
    params
  })
}

// 拣货任务明细
export function getPickingList(params) {
  return serviceIps({
    url: 'picking/pageDetail',
    params
  })
}

// 获取下一个编码
export function getCodeFactory(name) {
  return serviceApi({
    url: `codeFactory/next/${name}`
  })
}

// 查询全部仓库
export function getWareHouse(params) {
  return serviceApi({
    url: 'warehouse/list',
    params
  })
}

// 查询全部货主管理
export function getOwner(params) {
  return serviceApi({
    url: 'owner/list',
    params
  })
}

// 查询全部库区
export function getArea(params) {
  return serviceApi({
    url: 'area/list',
    params
  })
}

// 新增出库单接口
export function getAddOutbound(data) {
  return serviceIps({
    url: 'outbound',
    method: 'post',
    data
  })
}

// 添加发货商品
export function addGoods(params) {
  return serviceIps({
    utl: 'stock/pageDetail',
    params
  })
}
