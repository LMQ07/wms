<template>
  <div>
    <el-card class="box-card">
      <el-row type="flex" align="middle" justify="center">
        <el-steps style="flex-basis: 40%;" :active="active" finish-status="success">
          <el-step title="填写入库单基础信息" />
          <el-step title="填写货品清单" />
        </el-steps>
      </el-row>
      <el-form :label-position="'top'" :model="formData" :rules="rules">
        <el-row>
          <el-col :span="6">
            <el-form-item label="入库单号" prop="code" style="width: 90%;">
              <el-input v-model="formData.code" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="运单编号" prop="billCode" style="width: 90%;">
              <el-input v-model="formData.billCode" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="计划到达时间" prop="planArrivalTime">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
                v-model="formData.planArrivalTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="货主" prop="ownerName" style="width: 90%;">
              <el-input v-model="formData.ownerName" placeholder="请输入货主名称/编码" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="仓库" prop="warehouseId">
              <el-select style="width: 90%;" placeholder="请选择仓库" v-model="formData.warehouseId">
                <el-option label="一号仓库" value="shanghai" />
                <el-option label="二号仓库" value="beijing" />
                <el-option label="三号仓库" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="发货人姓名" prop="shipperName" style="width: 90%;">
              <el-input placeholder="请输入" v-model="formData.shipperName" />
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="送货人姓名" prop="deliveryName" style="width: 90%;">
              <el-input placeholder="请输入" v-model="formData.deliveryName" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="送货人电话" prop="deliveryPhone" style="width: 90%;">
              <el-input placeholder="请输入" v-model="formData.deliveryPhone" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="备注" prop="remark" style="width: 90%;">
              <el-input placeholder="请输入" v-model="formData.remark" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div class="buttonBox">
        <el-button round style="width:100px" class="importantButton" @click="returnFn">返回</el-button>
        <el-button
          round
          style="background-color:#f4b53f;color:black;width:200px"
          class="importantButton"
          @click="addXz"
        >下一步</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      name: 'HP',
      formData: {
        code: '', // 入库单号
        billCode: '', // 运营编号
        planArrivalTime: '', // 计划到达时间
        ownerName: '', // 货主
        warehouseId: '', //  仓库
        shipperName: '', // 发货人姓名
        deliveryName: '', //  送货人姓名
        deliveryPhone: '', // 送货人电话
        remark: '', // 备注
      },
      area: [], // 库区名称
      rules: {
        code: [{ required: true, message: '请输入', trigger: 'blur' }],
        billCode: [
          { required: true, message: '请输入运单编号', trigger: 'blur' },
        ],
        planArrivalTime: [
          { required: true, message: '请选择计划到达时间', trigger: 'blur' },
        ],
        ownerName: [{ required: true, message: '请选择货主', trigger: 'blur' }],
        warehouseId: [
          { required: true, message: '请选择仓库', trigger: 'blur' },
        ],
        shipperName: [
          { required: true, message: '请输入发货人姓名', trigger: 'blur' },
        ],
        deliveryName: [
          { required: true, message: '请输入送货人姓名', trigger: 'blur' },
        ],
        deliveryPhone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep .box-card {
  padding: 10px;
  border-radius: 12px;
  padding-top: 80px;
  .el-col-8 {
    padding-left: 15px;
    padding-right: 15px;
  }
  .el-form-item__label {
    color: #887e7e;
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
  }

  .el-input__inner {
    border: 1px solid #f8f5f5;
    background: #f8f5f5;
    border-radius: 6px;
  }
  .el-input.is-disabled .el-input__inner {
    background: #f3ebeb !important;
    border-color: #f3ebeb;
    color: #b5abab;
  }
}
.buttonBox {
  padding: 25px 0 0;
  margin: 0 -30px -5px;
  border-top: 1px solid #f5efee;
  text-align: center;
}
</style>