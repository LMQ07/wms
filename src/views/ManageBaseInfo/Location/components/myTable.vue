<template>
  <div>
    <el-table
      ref="table"
      v-loading="loading"
      :data="tableList"
      style="width: 100%"
      border
      :header-cell-style="{ background: 'rgb(249,246,238)' }"
      empty-text="暂无数据"
      stripe
    >
      <el-table-column type="index" width="80" />
      <el-table-column prop="warehouseName" label="所属仓库" />
      <el-table-column prop="areaCode" label="库区编码" width="100px" />
      <el-table-column prop="areaName" label="库区名称" width="160px" />
      <el-table-column prop="code" label="库位编码" width="100px" />
      <el-table-column prop="name" label="库位名称" />
      <el-table-column label="温度类型">
        <template slot-scope="{row}">
          {{ row.temperatureType|temperatureType }}
        </template>
      </el-table-column>
      <el-table-column label="承重类型">
        <template slot-scope="{row}">
          {{ row.bearingType|bearingType }}
        </template>
      </el-table-column>
      <el-table-column label="用途属性" width="150px">
        <template slot-scope="{row}">
          {{ row.useType|useType }}
        </template>
      </el-table-column>
      <el-table-column label="停用状态">
        <template slot-scope="{row}">
          {{ row.status|status }}
        </template>
      </el-table-column>
      <el-table-column prop="maxNum" label="承载上限" />
      <el-table-column prop="updateTime" label="更新时间" width="200px" />
      <el-table-column label="操作" fixed="right" width="160px">
        <template slot-scope="{row}">
          <el-button type="text" class="textBtnColor">编辑</el-button>
          <el-button type="text" class="textBtnColor">停用</el-button>
          <el-button type="text" class="textBtnColor">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center">
      <el-pagination
        :current-page="current"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  filters: {
    temperatureType(val) {
      const type = {
        CW: '常温',
        LC: '冷藏',
        HW: '恒温'
      }
      return type[val]
    },
    bearingType(val) {
      const type = {
        ZX: '重型',
        QX: '轻型',
        BX: '中型'
      }
      return type[val]
    },
    useType(val) {
      const type = {
        RKHCQ: '入库缓存区',
        CKHCQ: '出库缓存区',
        CCQ: '存储区',
        FJQ: '分拣区',
        ZJQ: '质检区'
      }
      return type[val]
    },
    status(val) {
      const type = {
        0: '停用',
        1: '启用'
      }
      return type[val]
    }

  },

  props: {
    loading: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    tableList: {
      type: Array,
      default: function() {
        return []
      }

    },
    // 当前页码
    current: {
      type: [String, Number],
      default: function() {
        return 1
      }
    },
    total: {
      type: [String, Number],
      default: function() {
        return 0
      }
    },
    size: {
      type: [String, Number],
      default: function() {
        return 10
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log('111', val)
      this.$emit('changeSize', val)
    },
    handleCurrentChange(val) {
      let page
      if (val > Math.floor(this.total / this.size)) {
        page = Math.floor(this.total / this.size)
      }
      page = val
      this.$emit('changePage', page)
    }
  }
}
</script>

<style lang="scss" scoped>
    .textBtnColor{
        &.el-button--text{
            color: #ffb200;
        }
    }
    .el-table__row--striped{
        td{
            background: #fdfcf9!important;
        }
    }
</style>
