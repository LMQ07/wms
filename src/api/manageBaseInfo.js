import request from '@/utils/request'

export function getwarehouseList(params) {
  return request({
    url: '/warehouse/page',
    method: 'get',
    params
  })
}
