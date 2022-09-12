import { serviceApi, serviceIps } from '@/utils/request'

export function getShipper(params) {
  return serviceApi({
    url: '/owner/page',
    method: 'get',
    params
  })
}

export function getShipperCode(HZ) {
  return serviceApi({
    url: `/codeFactory/next/${HZ}`,
    method: 'Get'
  })
}

export function addShipperCode(data) {
  return serviceApi({
    url: '/owner',
    method: 'POST',
    data
  })
}

export function editShipper(id) {
  return serviceApi({
    url: `/owner/detail/${id}`,
    method: 'GET'
  })
}

export function delShipper(params) {
  return serviceApi({
    url: '/owner',
    method: 'DELETE',
    params
  })
}
