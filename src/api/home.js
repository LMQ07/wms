import request from '@/utils/request'

export const getHomeToDo = () => {
  return request({
    url: 'home/todo'
  })
}
export const getHomeSumList = (params) => {
  return request({
    url: 'home/sumList',
    params
  })
}
export const getHomeStockUseStatus = () => {
  return request({
    url: 'home/stockUseStatus'
  })
}

export const getAreaUseStatus = () => {
  return request({
    url: 'home/areaUseStatus'
  })
}
