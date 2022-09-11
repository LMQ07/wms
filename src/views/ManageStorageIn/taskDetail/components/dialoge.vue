<template>
  <el-dialog title="查看上架信息" :visible.sync="isShow" width="1080px" :before-close="handleClose">
    <div
      class="divDesc"
      style="padding-top: 12px;padding-bottom: 16px;border-top:1px solid #f4efee;border-bottom:1px solid #"
    >
      <el-row style="margin-left: -13px; margin-right: -47px;display: flex;">
        <el-row :span="4" style="padding-left: 47px; padding-right: 47px;">
          <p>货品编号</p>
          <p>a</p>
        </el-row>
        <el-row :span="4" style="padding-left: 47px; padding-right: 47px;">
          <p>货品编号</p>
          <p>a</p>
        </el-row>
        <el-row :span="4" style="padding-left: 47px; padding-right: 47px;">
          <p>货品编号</p>
          <p>a</p>
        </el-row>
        <el-row :span="4" style="padding-left: 47px; padding-right: 47px;">
          <p>货品编号</p>
          <p>a</p>
        </el-row>
        <el-row :span="4" style="padding-left: 47px; padding-right: 47px;">
          <p>货品编号</p>
          <p>a</p>
        </el-row>
      </el-row>
    </div>
    <span slot="footer" class="dialog-footer">
      <div class="buttonBox">
        <el-button
          round
          style="width:100px;background-color:#f8f5f5;width:180px;margin-right:20px;color:black;"
          class="importantButton"
          @click="returnFn"
        >返回</el-button>
      </div>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClose() {},
    // 返回按钮
    returnFn() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
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


