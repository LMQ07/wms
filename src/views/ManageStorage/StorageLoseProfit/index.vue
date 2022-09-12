<template>
  <div>
    <SearchCard class="card" :config="configArray" @getFormData="searchByMsg" />
    <Table />
  </div>
</template>

<script>
// import { getLoseProfile } from '@/api/manageBaseInfo'
export default {
  data() {
    return {
      configArray: [{ label: '损益单号', prop: 'code' },
        { label: '损益单状态', prop: 'status', type: 'select', children: [{ label: '新建', value: '1', prop: '1' }, { label: '已调整', value: '2', prop: '2' }] },
        { label: '货主名称', prop: 'ownerName' },
        { label: '货品名称', prop: 'goodsName' }
      ],
      thead: [
        { label: '损益效果', prop: 'code' },
        { label: '仓库名称', prop: 'warehouseName' },
        { label: '库区名称', prop: 'areaName' },
        { label: '库位名字', prop: 'locationName' },
        { label: '货主名称', prop: 'ownerName', sortable: true },
        { label: '货品名称', prop: 'goodsName', sortable: true },
        { label: '损益数量', prop: 'idNum' },
        { label: '损益金额(元)', prop: 'idMoney', sortable: true },
        { label: '创建人', prop: 'createName' },
        { label: '创建时间', prop: 'createTime', sortable: true },
        { label: '损益效果', prop: 'code' },
        { label: '损益效果', prop: 'code' }
      ]
    }
  },
  methods: {
    searchByMsg(form) {
      console.log(form)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    height: 215px;
  }
  ::v-deep .box-card .card-form .el-col .el-form-item{
      margin-bottom: 22px;
    }
  ::v-deep .el-select{
    width: 100%;
  }
</style>
