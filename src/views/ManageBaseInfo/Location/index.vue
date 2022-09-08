<template>
  <div>
    <SearchCard :config="config" @getFormData="getFormData" />
    <el-card>
      <myTable
        :table-list="tableList"
        :current="searchTerm.current"
        :total="total"
        :size="searchTerm.size"
        :loading="loading"
        @changePage="changePage"
        @changeSize="changeSize"
      />
    </el-card>

  </div>
</template>

<script>
import SearchCard from '@/components/SearchCard'
import { getLocationPageDetail } from '@/api/manageBaseInfo'
import myTable from './components/myTable'

export default {
  name: 'Location',
  components: { SearchCard, myTable },
  data() {
    return {
      searchTerm: {
        areaName: '',
        name: '',
        current: 1,
        size: 10
      },
      labelPosition: 'top',
      config: [
        { prop: 'areaName', label: '库区名称', type: '' },
        { prop: 'name', label: '库区名称', type: '' },
        { prop: 'status', label: '库位状态', type: 'select',
          children: [{
            value: '',
            label: '全部'
          },
          {
            value: 0,
            label: '停用'
          },
          {
            value: 1,
            label: '启用'
          }] }
      ],
      tableList: [],
      total: 0,
      loading: false
    }
  },
  created() {
    this._getLocationPageDetail()
  },
  methods: {
    // 搜索
    getFormData(form) {
      Object.assign(this.searchTerm, form)
      if (this.searchTerm.status === '') {
        delete this.searchTerm.status
      }
      this._getLocationPageDetail()
    },
    // 重置
    getwarehouseList() {
      this.searchTerm = {
        areaName: '',
        name: '',
        current: 1,
        size: 10
      }
      this._getLocationPageDetail()
    },
    async  _getLocationPageDetail() {
      this.loading = true
      const { data } = await getLocationPageDetail(this.searchTerm)
      console.log('data', data)
      this.tableList = data.records
      this.total = +data.total
      this.loading = false
    },
    changePage(val) {
      this.$set(this.searchTerm, 'current', val)
      this._getLocationPageDetail()
    },
    changeSize(val) {
      this.$set(this.searchTerm, 'size', val)
      this._getLocationPageDetail()
    }
  }
}
</script>

<style lang="scss" >
.el-card{
  margin-top: 20px;
}
</style>
