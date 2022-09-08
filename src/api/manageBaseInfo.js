import request from '@/utils/request'

export function getwarehouseList(params) {
  return request({
    url: '/warehouse/page',
    method: 'get',
    params
  })
}

// 分页查询库位详细信息
export function getLocationPageDetail(params) {
  return request({
    url: '/location/pageDetail',
    method: 'get',
    params
  })
}
