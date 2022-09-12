<template>
  <div>
    <el-card class="box-card">
      <el-row type="flex" :gutter="20">
        <el-col>
          <el-form ref="goodsForm" :model="formData" :rules="rules">
            <el-col :span="6">
              <el-form-item label="货品编号" prop="code">
                <el-input v-model="formData.code" placeholder="请输入" disabled="true" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货品类型" prop="goodsTypeName">
                <el-input v-model="formData.goodsTypeName" placeholder="请输入内容" suffix-icon="el-icon-search" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货品名称" prop="name">
                <el-input v-model="formData.name" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货品条码" prop="barCode">
                <el-input v-model="formData.barCode" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="货主" prop="ownerName">
                <el-input v-model="formData.ownerName" placeholder="请输入内容" suffix-icon="el-icon-search" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="质检方式" prop="inspectionType">
                <el-select v-model="formData.inspectionType" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in inspectionType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="温度要求" prop="temperatureType">
                <el-select v-model="formData.temperatureType" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in temperatureType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="承重要求" prop="bearingType">
                <el-select v-model="formData.bearingType" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in bearingType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="体积" prop="volume">
                <el-input v-model="formData.volume" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="指定库区">
                <el-select v-model="formData.areaName" placeholder="请选择" style="width:100%">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="单价">
                <el-input v-model="formData.price" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="单位">
                <el-input v-model="formData.unit" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="保质天数">
                <el-input v-model="formData.guaranteeDay" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-form>
        </el-col>
      </el-row>

      <el-row class="buttonBox">
        <el-col>
          <el-button class="return" @click="$router.back()">返回</el-button>
          <el-button class="sure">提交</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getGoodsCode, goodsType, goodsOwner, editGoods } from '@/api/goodsManagement'
export default {
  components: { },
  data() {
    return {
      formData: {
        areaId: '',
        code: '',
        goodsTypeName: '',
        name: '',
        barCode: '',
        ownerName: '',
        inspectionType: [],
        temperatureType: [],
        bearingType: [],
        volume: '',
        areaName: [],
        price: '',
        unit: '',
        guaranteeDay: '',
        goodsTypeId: '',
        ownerId: ''
      },
      rules: {
        code: [{ required: true, message: '请输入货品编码', trigger: 'blur' }],
        goodsTypeName: [{ required: true, message: '请输入货品类型名称/货品类型编码', trigger: 'blur' }],
        name: [{ required: true, message: '请输入货品名称', trigger: 'blur' }],
        barCode: [{ required: true, message: '请输入货品条码', trigger: 'blur' }],
        ownerName: [{ required: true, message: '请输入货主名称/编码', trigger: 'blur' }],
        inspectionType: [{ required: true, message: '请选择质检类型', trigger: 'blur' }],
        temperatureType: [{ required: true, message: '请选择温度类型', trigger: 'blur' }],
        bearingType: [{ required: true, message: '请选择承重类型', trigger: 'blur' }],
        volume: [{ required: true, message: '请输入数字', trigger: 'blur' }]
      },
      HP: 'HP',
      inspectionType: [
        {
          value: '选项1',
          label: '不质检'
        },
        {
          value: '选项2',
          label: '全检'
        },
        {
          value: '选项3',
          label: '抽检'
        }
      ],
      temperatureType: [
        {
          value: '选项1',
          label: '常温'
        },
        {
          value: '选项2',
          label: '冷藏'
        },
        {
          value: '选项3',
          label: '恒温'
        }
      ],
      bearingType: [
        {
          value: '选项1',
          label: '重型'
        },
        {
          value: '选项2',
          label: '轻型'
        },
        {
          value: '选项3',
          label: '中型'
        }
      ],
      params: '',
      id: ''
    }
  },
  async created() {
    this.getGoodsCode()
    // console.log(this.$route.params.ownerId)
    this.goodsType()
    this.goodsOwner()
    // this.id = this.$route.params.id
    if (this.$route.params.id !== 'null') {
      const { data } = await editGoods(this.$route.params.id)
      console.log(data)
      this.formData = data.map(item => {
        const name = {
          BCL: '不处理',
          QJ: '全检',
          CJ: '抽检',
          CW: '常温',
          LC: '冷藏',
          HW: '恒温',
          ZX: '重型',
          QX: '轻型',
          BX: '中型'
        }
        item.inspectionType = name[item.inspectionType]
        item.temperatureType = name[item.temperatureType]
        item.bearingType = name[item.bearingType]

        return item
      })
    }
  },
  methods: {
    async getGoodsCode() {
      try {
        const res = await getGoodsCode(this.HP)
        // console.log(res)
        this.formData.code = res.data
      } catch (e) {
        console.log(e)
      }
    },
    async goodsType() {
      try {
        const res = await goodsType(this.params)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    async goodsOwner() {
      try {
        const res = await goodsOwner(this.params)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
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
