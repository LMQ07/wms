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
