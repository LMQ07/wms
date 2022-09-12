import {serviceApi} from '@/utils/request'
/**
 * 分页获取列表数据
 * @param {Object} params 
 * @returns promise
 */
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
export const getAreaListDate = (params) => {
  return serviceApi({
    url: 'area/list',
    params
  })
}
export const getInptSearchAreaList = (params) => {
  return serviceApi({
    url: 'area/list',
    params
  })
}
// 获得区域的库存列表
export const getAreaBySearch = (id) => {
  return serviceApi({
    url: `area/overview/${id}`
  })
}
// 获取详情
export const getDetailLocation = (params) => {
  return serviceApi({
    url: 'location/listDetail',
    params
  })
}
/**
 * 添加仓库
 * @param {Object} data 
 * @returns promise
 */
export function addWareHouse(data) {
  return serviceApi({
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
  return serviceApi({
    url: `/codeFactory/next/${name}`,
  })
}
/**
 * 修改仓库信息
 * @param {Object} data 
 * @returns promise
 */
export function editWareHouse(data) {
  return serviceApi({
    url: '/warehouse',
    method:'PUT',
    data
  })
}
/**
 * 删除仓库
 * @param {ids[]} params 
 * @returns promise
 */
export function delWareHouse(params) {
  return serviceApi({
    url: '/warehouse',
    method:'DELETE',
    params
  })
}
/**
 * 获取商品类型列表
 * @param {Object} params 
 * @returns promise
 */
export function getGoodsTypeList(params) {
  return serviceApi({
    url: '/goodsType/page',
    method:'get',
    params
  })
}
/**
 * 添加商品类型
 * @param {Object} data 
 * @returns promise
 */
export function addGoodsType(data) {
  return serviceApi({
    url: '/goodsType',
    method:'post',
    data
  })
}
/**
 * 删除商品类型
 * @param {ids[]} data 
 * @returns promise
 */
 export function delGoodsType(params) {
  return serviceApi({
    url: '/goodsType',
    method:'DELETE',
    params
  })
}
/**
 * 更新商品类型
 * @param {Object} data 
 * @returns promise
 */
 export function editGoodsType(data) {
  return serviceApi({
    url: '/goodsType',
    method:'put',
    data
  })
}
/**
 * 获取库区列表
 * @param {Object} params 
 * @returns promise
 */
export function getAreaList(params) {
  return serviceApi({
    url: '/area/pageDetail',
    method:'get',
    params
  })
}
/**
 * 获取全部仓库
 * @param {Object} params 
 * @returns 
 */
export function getAllWarehouseList(params) {
  return serviceApi({
    url: '/warehouse/list',
    method:'get',
    params
  })
}

/**
 * 新增库区
 * @param {Object} params 
 * @returns 
 */
 export function addArea(data) {
  return serviceApi({
    url: '/area',
    method:'post',
    data
  })
}
/**
 * 删除库区
 * @param {ids[]} params 
 * @returns promise
 */
 export function delArea(params) {
  return serviceApi({
    url: '/area',
    method:'DELETE',
    params
  })
}
/**
 * 修改库区状态
 * @param {ids[]} params 
 * @returns promise
 */
 export function editArea(data) {
  return serviceApi({
    url: '/area',
    method:'put',
    data
  })
}
/**
 * 上传
 * @param {file} params 
 * @returns promise
 */
 export function uploadExcel(data) {
  return serviceApi({
    url: '/area/importExcel',
    method:'post',
    headers:{'Content-Type':'multipart/form-data'},
    data
  })
}