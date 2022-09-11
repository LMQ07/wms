import { serviceApi } from '@/utils/request'

export function getwarehouseList(params) {
  return serviceApi({
    url: '/warehouse/page',
    method: 'get',
    params
  })
}
export function getAllWareHouse() {
  return serviceApi({
    url: 'warehouse/list',
    params: {
      status: 1
    }
  })
}
export const getAreaListDate = (params) => {
  return serviceApi({
    url: 'area/list',
    params
  })
}
export const getInptSearchAreaList = (params) => {
  return serviceApi({
    url: 'area/list',
    params
  })
}
// 获得区域的库存列表
export const getAreaBySearch = (id) => {
  return serviceApi({
    url: `area/overview/${id}`
  })
}
// 获取详情
export const getDetailLocation = (params) => {
  return serviceApi({
    url: 'location/listDetail',
    params
  })
}
