import { serviceApi, serviceIps } from '@/utils/request'

export function getwarehouseList(params) {
  return serviceApi({
    url: '/warehouse/page',
    method: 'get',
    params
  })
}
