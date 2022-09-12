import { serviceApi, serviceIps } from '@/utils/request'

export function getGoods(params) {
  return serviceApi({
    url: '/goods/pageDetail',
    method: 'get',
    params
  })
}

export function delGoods(ids) {
  return serviceApi({
    url: `/goods`,
    method: 'DEL',
    ids
  })
}

export function getGoodsCode(HP) {
  return serviceApi({
    url: `/codeFactory/next/${HP}`,
    method: 'Get'
  })
}

export function goodsType(params) {
  return serviceApi({
    url: '/goodsType/vague',
    method: 'Get',
    params
  })
}

export function goodsOwner(params) {
  return serviceApi({
    url: '/owner/vague',
    method: 'Get',
    params
  })
}

export function editGoods(id) {
  return serviceApi({
    url: `/goods/${id}`,
    method: 'GET'
  })
}
