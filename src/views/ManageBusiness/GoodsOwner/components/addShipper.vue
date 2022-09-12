<template>
  <div>
    <el-card class="box-card">
      <div v-if="isShow">
        <el-row type="flex" align="middle" justify="center">
          <el-col :span="12">
            <el-steps :active="active" finish-status="success">
              <el-step title="基础信息" />
              <el-step title="分配库位" />
            </el-steps>
          </el-col>
        </el-row>
        <el-row type="flex" :gutter="20">
          <el-col>
            <el-form ref="shipperForm" :model="formData" :rules="rules">
              <el-col :span="6">
                <el-form-item label="货主编号" prop="code">
                  <el-input v-model="formData.code" placeholder="请输入" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="货主名称" prop="name">
                  <el-input v-model="formData.name" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="联系人" prop="personName">
                  <el-input v-model="formData.personName" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="联系人电话" prop="phone">
                  <el-input v-model="formData.phone" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="联系人邮箱" prop="email">
                  <el-input v-model="formData.email" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="省/市/区" prop="location">
                  <el-cascader
                    v-model="formData.location"
                    :options="options"
                    @change="handleChange"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="详细地址" prop="address">
                  <el-input v-model="formData.address" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="备注" prop="remark">
                  <el-input v-model="formData.remark" placeholder="请输入" type="textarea" />
                </el-form-item>
              </el-col>

            </el-form>
          </el-col>
        </el-row>
        <el-row class="buttonBox">
          <el-col>
            <el-button class="return" @click="$router.back()">返回</el-button>
            <el-button class="sure" @click="nextStep">下一步</el-button>
          </el-col>
        </el-row>
      </div>

      <div v-else>
        999
      </div>
    </el-card>
  </div>
</template>

<script>
import { getShipperCode, addShipperCode, editShipper } from '@/api/shipperManagement'
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  components: { },
  data() {
    return {
      active: 0,
      formData: {
        area: '',
        city: '',
        id: '',
        code: '',
        name: '',
        personName: '',
        phone: '',
        email: '',
        location: '',
        address: '',
        remark: '',
        province: ''
      },
      rules: {
        code: [{ required: true, message: '请输入货主编号', trigger: 'blur' }],
        name: [{ required: true, message: '请输入货主名称', trigger: 'blur' }],
        personName: [{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系人手机号', trigger: 'blur' }],
        location: [{ required: true, message: '请选择区域', trigger: 'blur' }]
      },
      HZ: 'HZ',
      options: regionData,
      isShow: true,
      code: [],
      id: ''
    }
  },
  async created() {
    this.getShipperCode()
    console.log(this.$route.params.id)
    this.id = this.$route.params.id
    if (this.$route.params.id !== 'null') {
      const { data } = await editShipper(this.$route.params.id)
      console.log(data)
      this.formData = data
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    },
    async getShipperCode() {
      try {
        const res = await getShipperCode(this.HZ)
        // console.log(res)
        this.formData.code = res.data
      } catch (e) {
        console.log(e)
      }
    },
    handleChange(value) {
      // console.log(TextToCode[this.formData.location].code)
      // console.log(value)
      this.code = value
      console.log(this.code)
      this.formData.province = this.code[0]
      this.formData.area = this.code[2]
      this.formData.city = this.code[1]
      this.formData.location = CodeToText[this.code[0]] + '/' + CodeToText[this.code[2]] + '/' + CodeToText[this.code[1]]
    },
    async nextStep() {
      this.isShow = false
      try {
        await addShipperCode(this.formData)
        // console.log(res)
        this.$message.success('恭喜你,提交成功!')
      } catch (e) {
        console.log(e.message)
      }
    }
    // async editShipper() {
    //   try {
    //     const res = await editShipper(this.id)
    //     console.log(res)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }

}
</script>

<style scoped lang="scss">
.box-card {
      padding: 10px;
      background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
}

.buttonBox {
      padding: 25px 0 0;
    margin: 0 -30px -5px;
    border-top: 1px solid #f5efee;
    text-align: center;

  .return {
        background: #f8f5f5;
    color: #332929;
        width: 170px;
    margin: 0 15px;
        height: 40px;
    border-radius: 20px;
    border: 0;
    font-size: 14px;
    font-family: PingFangSC,PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
    padding-left: 26px;
    padding-right: 26px;
    cursor: pointer;
    outline: 0;
  }

  .return:hover {
    background-color: #ffb200;
  }

  .sure {
    background: #ffb200;
    color: #332929;
        height: 40px;
    border-radius: 20px;
    border: 0;
    font-size: 14px;
    font-family: PingFangSC,PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
    padding-left: 26px;
    padding-right: 26px;
    cursor: pointer;
    outline: 0;
        width: 170px;
    margin: 0 15px;
  }
}

</style>
