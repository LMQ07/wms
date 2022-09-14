import { serviceApi, serviceIps } from '@/utils/request'

// 分页查询明细库存
export function stockPageDetail(params) {
  return serviceIps({
    url: '/stock/pageDetail',
    params
  })
}
// 查询全部仓库
export function warehouseList(params) {
  return serviceApi({
    url: 'warehouse/list',
    params
  })
}
// 查询全部库区
export function getAreaList(params) {
  return serviceApi({
    url: 'area/list',
    params
  })
}
// 查询全部库位
export function getLocationlist(params) {
  return serviceApi({
    url: 'location/list',
    params
  })
}
// 分页查询明细库存
export function getStockPageDetail(params) {
  return serviceIps({
    url: '/stock/pageDetail',
    method: 'GET',
    params
  })
}
// 分页查询库存记录
export function getStockRecordPage(params) {
  return serviceIps({
    url: 'stockRecord/page',
    params
  })
}
