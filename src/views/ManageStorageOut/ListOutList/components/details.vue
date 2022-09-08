<template>
  <div>
    <el-card class="box-card">
      <el-row type="flex" align="middle" justify="center">
        <el-steps style="flex-basis: 50%;" :active="active" finish-status="success">
          <el-step title="填写出库基础信息" />
          <el-step title="填写承运商信息" />
          <el-step title="填写货品明细信息" />
        </el-steps>
      </el-row>
      <el-form :label-position="'top'">
        <el-row>
          <el-col :span="8">
            <el-form-item label="出库单号" prop="name">
              <el-input disabled />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label-width="100px" label="仓库名称" prop="name">
              <el-select style="width: 100%;" placeholder="请选择活动区域">
                <el-option label="一号仓库" value="shanghai" />
                <el-option label="二号仓库" value="beijing" />
                <el-option label="三号仓库" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="库区名称" prop="name">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="货主" prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出库类型" prop="name">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="备注" prop="name">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getCodeFactory } from '@/api/storageOut'
export default {
  data() {
    return {
      active: 0,
      name: 'HP',
      formData: {
        code: '',
        warehouseName: ''

      }
    }
  },
  created() {
    this.getCodeFactory()
  },
  methods: {
    async  getCodeFactory() {
      try {
        const res = await getCodeFactory(this.name)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep  .box-card {
  padding: 10px;
  border-radius: 12px;
  .el-col-8 {
    padding-left: 15px;
    padding-right: 15px;
  }
  .el-form-item__label {
    color: #887e7e;
    font-size: 12px;
    font-family: PingFangSC,PingFangSC-Medium;
    font-weight: 500;
  }

  .el-input__inner {
    border: 1px solid #f8f5f5;
    background: #f8f5f5 ;
    border-radius: 6px;
  }
 .el-input.is-disabled .el-input__inner {
    background: #f3ebeb !important;
    border-color: #f3ebeb;
    color: #b5abab;
  }
  }
</style>
