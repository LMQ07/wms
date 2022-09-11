import {serviceApi,serviceIps} from '@/utils/request'

// 查询全部入库单
export function getInquire(params) {
  return serviceIps({
    url: '/receipt/pageDetail',
    method: 'GET',
    params
  })
}

// 分页查询收货任务明细
export function getReceiving(params) {
  return serviceIps({
    url: '/receiving/pageDetail',
    method: 'GET',
    params
  })
}

// 分页查询上架任务明细
export function getGrounding(params) {
  return serviceIps({
    url: '/grounding/pageDetail',
    method: 'GET',
    params
  })
}

// 获取下一个编码
export function getCodeFactory(name) {
  return serviceApi({
    url:`/codeFactory/next/${name}`,
    method: 'GET',
  })
}

// 查询全部仓库
export function getWarehouse(params) {
  return serviceApi({
    url:'/warehouse/list',
    method: 'GET',
    params
  })
}