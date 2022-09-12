<template>
  <div>
    <!-- 搜索 -->
    <SearchCard
      :config="config"
      @getFormData="getFormData"
      @resetlist="getOutBoundList"
    />
    <!-- 表单 -->
    <Table
      :thead="thead"
      :table-date="list"
      :total="total"
      :page-sizes="pageSizes"
      @changeSize="changeSize"
      @changePage="changePage"
    >
      <template slot="btn">
        <el-button
          class="btn"
          type="success"
          round
          @click="$router.push(`/manage-storage-out/list-out/details/${null}`)"
        >
          新增出库单
        </el-button>
      </template>
      <template #status="{ scoped: { row }}">
        {{ formateStatus (row.status) }}
      </template>
      <template #type="{ scoped: { row }}">
        {{ outType (row.type) }}
      </template>
      <template #operate="{ scoped: { row }}">
        <el-button class="look" @click="look(row)">查看操作</el-button>
      </template>
    </Table>
  </div>
</template>

<script>
import { getOutBoundList } from '@/api/storageOut'
export default {
  data() {
    return {
      search: {
        code: '',
        billCode: '',
        ownerName: '',
        size: 10,
        current: 1
      },
      config: [
        { label: '出库单号', prop: 'code' },
        { label: '运单编号', prop: 'billCode' },
        { label: '货主名称', prop: 'ownerName' }
      ],
      thead: [
        {
          label: '出库单号',
          prop: 'code'
        },
        {
          label: '货主运单编号',
          prop: 'billCode'
        },
        {
          label: '出库类型',
          prop: 'type',
          slotName: 'type'
        },
        {
          label: '货主名称',
          prop: 'ownerName'
        },
        {
          label: '出库仓库',
          prop: 'warehouseName'
        },
        {
          label: '出库库区',
          prop: 'areaName'
        },
        {
          label: '计划出库时间',
          prop: 'planOutTime',
          width: '170',
          sortable: true

        },
        {
          label: '货品数量',
          prop: 'goodsNum',
          sortable: true
        },
        {
          label: '出库单状态',
          prop: 'status',
          slotName: 'status',
          filters: [
            { 'text': '新建', 'value': '1' },
            { 'text': '拣货中', 'value': '2' },
            { 'text': '已取消', 'value': '3' },
            { 'text': '拣货完成', 'value': '4' },
            { 'text': '交接中', 'value': '5' },
            { 'text': '交接完成', 'value': '6' }
          ],
          filterMethod: this.filterHandler
        },
        {
          label: '创建人',
          prop: 'createName'
        },
        {
          label: '创建时间',
          prop: 'createTime',
          width: '170',
          sortable: true
        },
        {
          label: '操作',
          slotName: 'operate',
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
    this.getOutBoundList(this.search)
  },
  methods: {
    async getOutBoundList(obj) {
      try {
        const { data } = await getOutBoundList(obj)
        // console.log(data)
        this.list = data.records
        this.total = Number(data.total)
      } catch (e) {
        console.log(e)
      }
    },
    formateStatus(val) {
      if (val === 1) {
        return '新建'
      }
      if (val === 2) {
        return '拣货中'
      }
      if (val === 3) {
        return '已取消'
      }
      if (val === 4) {
        return '拣货完成'
      }
      if (val === 5) {
        return '交接中'
      }
      if (val === 6) {
        return '交接完成'
      }
    },
    outType(val) {
      if (val === '0') {
        return 'B2B出库'
      }
    },
    // 查看操作
    look(row) {
      console.log(row)
    },
    changePage(val) {
      // console.log(val)
      this.search.current = val
      this.getOutBoundList(this.search)
    },
    changeSize(val) {
      // console.log(val)
      this.search.size = val
      this.getOutBoundList(this.search)
    },
    getFormData(obj) {
      this.getOutBoundList(obj)
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === Number(value)
    }

  }
}
</script>

<style lang='scss' scoped>
.btn {
  background: #00be76;
}
.look{
  color:#FFB200;
  border:unset;
 background-color: transparent;
}
.look:hover {
  color: #FF8E00;
}

</style>
