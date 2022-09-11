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
                style="width: 90%;"
                v-model="formData.planArrivalTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="货主" prop="ownerName" style="width: 90%;">
              <el-autocomplete
                class="inline-input"
                v-model="formData.ownerName"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                :trigger-on-focus="false"
                @select="handleSelect"
                style="width:100%"
              ></el-autocomplete>
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
        <el-button
          round
          style="width:100px;background-color:#f8f5f5;width:180px;margin-right:20px;color:black;"
          class="importantButton"
          @click="returnFn"
        >返回</el-button>
        <el-button
          round
          style="background-color:#f4b53f;color:black;width:180px"
          class="importantButton1"
          @click="next"
        >下一步</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getCodeFactory, getWarehouse } from '@/api/ListInList'
export default {
  data() {
    return {
      active: 0,
      name: 'HP',
      restaurants: [], // 货主搜索
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
  created() {
    this.getCodeFactory()
  },
  methods: {
    // 获取入库单号
    async getCodeFactory() {
      try {
        const res = await getCodeFactory(this.name)
        // console.log(res)
        this.formData.code = res.data
      } catch (error) {
        console.log(error)
      }
    },
    // 货主
    mounted() {
      this.restaurants = this.loadAll()
    },
    loadAll() {
      return [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        {
          value: 'Hot honey 首尔炸鸡（仙霞路）',
          address: '上海市长宁区淞虹路661号',
        },
        {
          value: '新旺角茶餐厅',
          address: '上海市普陀区真北路988号创邑金沙谷6号楼113',
        },
        { value: '泷千家(天山西路店)', address: '天山西路438号' },
        {
          value: '胖仙女纸杯蛋糕（上海凌空店）',
          address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101',
        },
        { value: '贡茶', address: '上海市长宁区金钟路633号' },
        {
          value: '豪大大香鸡排超级奶爸',
          address: '上海市嘉定区曹安公路曹安路1685号',
        },
        {
          value: '茶芝兰（奶茶，手抓饼）',
          address: '上海市普陀区同普路1435号',
        },
        { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
        { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
        { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
        { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
        {
          value: 'Monica摩托主题咖啡店',
          address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F',
        },
        {
          value: '浮生若茶（凌空soho店）',
          address: '上海长宁区金钟路968号9号楼地下一层',
        },
        { value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号' },
        { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
        {
          value: '快乐柠檬（神州智慧店）',
          address: '上海市长宁区天山西路567号1层R117号店铺',
        },
        {
          value: 'Merci Paul cafe',
          address: '上海市普陀区光复西路丹巴路28弄6号楼819',
        },
        {
          value: '猫山王（西郊百联店）',
          address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306',
        },
        { value: '枪会山', address: '上海市普陀区棕榈路' },
        { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
        { value: '钱记', address: '上海市长宁区天山西路' },
        { value: '壹杯加', address: '上海市长宁区通协路' },
        {
          value: '唦哇嘀咖',
          address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元',
        },
        { value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室' },
        {
          value: '爱茜茜里(近铁广场)',
          address:
            '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺',
        },
        {
          value: '鲜果榨汁（金沙江路和美广店）',
          address: '普陀区金沙江路2239号金沙和美广场B1-10-6',
        },
        {
          value: '开心丽果（缤谷店）',
          address: '上海市长宁区威宁路天山路341号',
        },
        { value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号' },
        { value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号' },
        { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
        {
          value: '凡仔汉堡（老真北路店）',
          address: '上海市普陀区老真北路160号',
        },
        { value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
        { value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号' },
        {
          value: '饭典*新简餐（凌空SOHO店）',
          address: '上海市长宁区金钟路968号9号楼地下一层9-83室',
        },
        {
          value: '焦耳·川式快餐（金钟路店）',
          address: '上海市金钟路633号地下一层甲部',
        },
        { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
        { value: '浏阳蒸菜', address: '天山西路430号' },
        { value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路' },
        {
          value: '樱花食堂（凌空店）',
          address: '上海市长宁区金钟路968号15楼15-105室',
        },
        { value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号' },
        {
          value: '福荣祥烧腊（平溪路店）',
          address: '上海市长宁区协和路福泉路255弄57-73号',
        },
        {
          value: '速记黄焖鸡米饭',
          address: '上海市长宁区北新泾街道金钟路180号1层01号摊位',
        },
        { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
        {
          value: '(小杨生煎)西郊百联餐厅',
          address: '长宁区仙霞西路88号百联2楼',
        },
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        {
          value: '南拳妈妈龙虾盖浇饭',
          address: '普陀区金沙江路1699号鑫乐惠美食广场A13',
        },
      ]
    },
    handleSelect(item) {
      console.log(item)
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    // 返回按钮
    returnFn() {
      this.$router.back()
    },
    // 下一步按钮
    next() {
      if (this.active++ > 2) this.active = 0
    },
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
.importantButton:hover {
  background-color: #f4b53f !important;
}
.importantButton1:hover {
  background-color: #f09536 !important;
}
</style>