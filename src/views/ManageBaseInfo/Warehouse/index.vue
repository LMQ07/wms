<template>
  <div>
    <SearchCard :config="setForm" @getFormData="searchData" />
    <Table
      :thead="tableLabel"
      :table-date="tableData"
      :total="total"
      @changeSize="changeSize"
      @changePage="changePage"
    >
      <template #btn>
        <el-button
          round
          @click="$router.push('/manage-base-info/warehouse/details/null')"
        >新增仓库</el-button>
      </template>
      <template #operate="{ scoped: { row } }">
        <span class="operate-btn">编辑</span>
        <span class="operate-btn">{{ row.status ? "启用" : "停用" }}</span>
        <span class="operate-btn">删除</span>
      </template>
      <template #type="{ scoped: { row } }">{{
        formateText(row.type)
      }}</template>
      <template #status="{ scoped: { row } }">{{
        row.status ? "停用" : "启用"
      }}</template>
    </Table>
  </div>
</template>

<script>
import { getwarehouseList } from '@/api/manageBaseInfo'
export default {
  data() {
    return {
      tableLabel: [
        {
          prop: 'code',
          label: '仓库编码'
        },
        {
          prop: 'name',
          label: '仓库名称'
        },
        {
          prop: 'type',
          label: '仓库类型',
          slotName: 'type'
        },
        {
          prop: 'location',
          label: '省/市/区'
        },
        {
          prop: 'address',
          label: '详细地址'
        },
        {
          prop: 'status',
          label: '仓库状态',
          slotName: 'status'
        },
        {
          prop: 'surface',
          label: '仓库面积²'
        },
        {
          prop: 'includedNum',
          label: '库区数量'
        },
        {
          prop: 'personName',
          label: '负责人'
        },
        {
          prop: 'phone',
          label: '联系电话'
        },
        {
          prop: 'updateTime',
          label: '更新时间',
          width: '200',
          filters: [{ 'text': '123', 'value': '123' }],
          sortable: 'true',
          filterMethod: (value, row, column) => { console.log(value, row, column) }
        },
        {
          label: '操作',
          slotName: 'operate',
          fixed: 'right',
          width: '200'
        }
      ],
      tableData: [],
      total: '',
      currentPage: '',
      pageSize: '',
      setForm: [
        { label: '仓库编号', prop: 'like_code' },
        { label: '仓库名称', prop: 'like_name' },
        {
          label: '仓库编号',
          prop: 'status',
          type: 'select',
          children: [
            { label: '全部', value: null },
            { label: '停用', value: 0 },
            { label: '启用', value: 1 }
          ]
        }
      ]
    }
  },
  created() {
    this.getwarehouseList()
  },
  methods: {
    async getwarehouseList(current = 1, size = 10, form) {
      const { data } = await getwarehouseList({ current, size, ...form })
      // console.log(data);
      this.tableData = data.records
      this.total = parseInt(data.total)

      // console.log(res);
    },
    formateText(type) {
      if (type == 'ZZ') {
        return '中转仓'
      } else if (type == 'JG') {
        return '加工仓'
      } else if (type == 'CB') {
        return '储备仓'
      } else if (type == 'LC') {
        return '冷藏仓'
      }
    },
    changeSize(val) {
      console.log(1)
      this.pageSize = val
      this.getwarehouseList(1, val)
    },
    changePage(val) {
      this.getwarehouseList(val, this.pageSize)
    },
    searchData(form) {
      this.getwarehouseList(1, 10, form)
    }
  }
}
</script>

<style>
.operate-btn {
  font-size: 13px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #ffb200;
  cursor: pointer;
  border-color: transparent;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  outline: 0;
  margin-left: 8px;
  margin-right: 8px;
}
</style>
