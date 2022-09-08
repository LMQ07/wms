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
