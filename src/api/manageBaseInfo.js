import request from '@/utils/request'
/**
 * 分页获取列表数据
 * @param {Object} params 
 * @returns promise
 */
export function getwarehouseList(params) {
  return request({
    url: '/warehouse/page',
    method: 'get',
    params
  })
}
/**
 * 添加仓库
 * @param {Object} data 
 * @returns promise
 */
export function addWareHouse(data) {
  return request({
    url: '/warehouse',
    method: 'post',
    data
  })
}
/**
 * 获取下一个仓库编号
 * @param {String} name 
 * @returns promise
 */
export function getNextCode(name) {
  return request({
    url: `/codeFactory/next/${name}`,
  })
}
/**
 * 修改仓库信息
 * @param {Object} data 
 * @returns promise
 */
export function editWareHouse(data) {
  return request({
    url: '/warehouse',
    method:'PUT',
    data
  })
}
export function delWareHouse(params) {
  return request({
    url: '/warehouse',
    method:'DELETE',
    params
  })
}