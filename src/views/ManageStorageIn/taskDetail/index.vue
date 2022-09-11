<template>
  <div class="taskDtail">
    <div class="progress">
      <div class="divProgress" style="display:flex;">
        <div class="divLabel" style="font-size: 13px;">上架进度</div>
        <div
          class="divContainer"
          style="width:200px;margin: 6px 18px 5px 14px;height: 7px;background-color: #f6f1f0;border-radius: 7px;"
        >
          <div
            class="divInnner"
            style="width: 199.336px;height: 7px;background-image: linear-gradient(90deg,#00be76,#6ee696);border-radius: 7px;}"
          ></div>
        </div>
        <div class="divLabel" style="font-size: 13px;">300/301</div>
      </div>
      <Table :thead="thead" :table-date="list" :page-sizes="pageSizes" :total="total">
        <template v-slot:action="{ scoped:{ row } }">
          <el-button
            type="text"
            style="color:#f7c76d;"
            class="viewDetails"
            @click="vewDetails(row)"
          >查看上架详情</el-button>
        </template>
      </Table>
      <div class="buttonBox">
        <el-button
          round
          style="width:100px;background-color:#f8f5f5;width:180px;margin-right:20px;color:black;"
          class="importantButton"
          @click="returnFn"
        >返回</el-button>
      </div>
    </div>

    <dialogeVue />
  </div>
</template>

<script>
import dialogeVue from './components/dialoge.vue'
export default {
  components: { dialogeVue },
  data() {
    return {
      thead: [
        { label: '货品编号', prop: 'goodsCode' },
        { label: '货品名称', prop: 'goodsName' },
        { label: '货品类型', prop: 'goodsTypeName' },
        { label: '货主名称', prop: 'ownerName' },
        { label: '仓库', prop: 'warehouseName' },
        { label: '货品数量', prop: 'realNum' },
        { label: '实上数量', prop: 'planNum' },
        { label: '差异数', prop: 'groundingDifferenceNum' },
        {
          label: '操作',
          slotName: 'action',
          prop: 'code',
          fixed: 'right',
          width: '200',
        },
      ],
      list: [],
      pageSizes: [10, 20, 30, 40],
      total: 0,
    }
  },
  methods: {
    // 返回按钮
    returnFn() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.taskDtail {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  min-height: 309px;
  .progress {
    padding: 32px 0 40px 20px;
    height: 72px;
  }
}
.buttonBox {
  padding: 25px 0 0;
  margin: -20px -30px -5px;
  border-top: 1px solid #f5efee;
  text-align: center;
  .importantButton:hover {
    background-color: #f4b53f !important;
  }
}
</style>
