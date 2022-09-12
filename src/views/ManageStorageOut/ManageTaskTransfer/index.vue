<template>
  <div>
    <!-- 搜索框 -->
    <SearchCard
      :config="config"
      @getFormData="getFormData"
      @resetlist="getTransferList"
    />
    <!-- 表单 -->
    <Table
      :thead="thead"
      :table-date="list"
      :page-sizes="pageSizes"
      :total="total"
      @changeSize="changeSize"
      @changePage="changePage"
    >
      <template #status="{ scoped:{ row }}">
        {{ formateText(row.status) }}
      </template>
    </Table>
  </div>
</template>

<script>
import { getTransferList } from '@/api/storageOut'

export default {
  data() {
    return {
      search: {
        code: '',
        outboundCode: '',
        carrierName: '',
        size: 10,
        current: 1
      },
      config: [
        { label: '交接编号', prop: 'code' },
        { label: '出库单号', prop: 'outboundCode' },
        { label: '承运商', prop: 'carrierName'
        }
      ],
      thead: [
        {
          label: '交接编号',
          prop: 'code'
        },
        {
          label: '出库单号',
          prop: 'outboundCode'
        },
        {
          label: '创建时间',
          prop: 'createTime',
          width: '160',
          sortable: true
        },
        {
          label: '创建人',
          prop: 'createName'
        },
        {
          label: '承运商',
          prop: 'carrierName'
        },
        {
          label: '运单号',
          prop: 'billCode'
        },
        {
          label: '交接状态',
          prop: 'status',
          slotName: 'status',
          filters: [
            { 'text': '新建', 'value': '1' },
            { 'text': '交接中', 'value': '2' },
            { 'text': '交接完成', 'value': '3' }
          ],
          filterMethod: this.filterHandler
        },
        {
          label: '交接员',
          prop: 'handoverName'
        },
        {
          label: '交接完成时间',
          prop: 'completionTime',
          width: '160',
          sortable: true
        },
        {
          label: '交接司机',
          prop: 'billCode'
        },
        {
          label: '交接司机电话',
          prop: 'driverPhone'
        },
        {
          label: '操作',
          fixed: 'right',
          width: '200'
        }
      ],
      list: [],
      total: 0,
      pageSizes: [10, 20, 30, 40]

    }
  },
  created() {
    this.getTransferList(this.search)
  },
  methods: {
    async  getTransferList(obj) {
      try {
        const { data } = await getTransferList(obj)
        // console.log(data)
        this.list = data.records
        this.total = Number(data.total)
      } catch (e) {
        console.log(e)
      }
    },
    changeSize(val) {
      // console.log(val)
      this.search.size = val
      this.getTransferList(this.search)
    },
    formateText(val) {
      if (val === 1) {
        return '新建'
      }
      if (val === 2) {
        return '交接'
      }
      if (val === 3) {
        return '交接完成'
      }
    },
    changePage(val) {
      // console.log(val)
      this.search.current = val
      this.getTransferList(this.search)
    },
    getFormData(obj) {
      // console.log(obj)
      this.getTransferList(obj)
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === Number(value)
    }
  }
}
</script>

<style></style>
