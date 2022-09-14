// import request from '@/utils/request'
import { serviceApi, serviceIps } from '@/utils/request'

// export function getwarehouseList(params) {
//   return request({
//     url: '/warehouse/page',
//     method: 'get',
//     params
//   })
// }

// 分页查询库位详细信息
export function getLocationPageDetail(params) {
  return serviceApi({
    url: '/location/pageDetail',
    method: 'get',
    params
  })
}
// 查询全部仓库
export function getWarehouseList(params) {
  return serviceApi({
    url: '/warehouse/list',
    method: 'get',
    params
  })
}
// 查询全部库区
export function getAreaList(params) {
  return serviceApi({
    url: '/area/list',
    params
  })
}
// 获取下一个编码
export function codeFactoryNext(kw) {
  return serviceApi({
    url: `/codeFactory/next/${kw}`

  })
}
// 新增库位
export function addLocation(data) {
  return serviceApi({
    url: '/location',
    method: 'POST',
    data
  })
}
// 修改库位
export function putLocation(data) {
  return serviceApi({
    url: 'location',
    method: 'PUT',
    data
  })
}
// 查询库区
export function getApiArea(id) {
  return serviceApi({
    url: `/area/${id}`,
    method: 'GET'
  })
}

// 查询库位
export function getApiLocation(id) {
  return serviceApi({
    url: `/location/${id}`
  })
}
// 删除库位
export function deleteLocation(params) {
  return serviceApi({
    url: 'location',
    method: 'DELETE',
    params
  })
}
// 导入
export function locationUpload(fileName) {
  return serviceApi({
    url: 'location/upload',
    method: 'POST',
    data: fileName
  })
}
