<template>
  <div>
    <!-- 第一个折叠面板 -->
    <el-card>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="基础信息" name="1">
          <el-steps :active="5" align-center finish-status="success">
            <el-step
              v-for="(item,index) in timeList"
              :key="index"
              :title="item.title"
              :description="item.time"
            />
          </el-steps>
          <div class="baseInfo">
            <el-row>
              <el-col :span="6">
                <p>出库单号</p>
                <span>{{ detaiObj.code }}</span>
              </el-col>
              <el-col :span="6">
                <p>创建时间</p>
                <span>{{ detaiObj.createTime }}</span>
              </el-col>
              <el-col :span="6">
                <p>计划到达时间</p>
                <span>{{ detaiObj.planOutTime }}</span>
              </el-col>
              <el-col :span="6">
                <p>出库类型</p>
                <span>B2B出库</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <p>仓库名称</p>
                <span>{{ detaiObj.warehouseName }}</span>
              </el-col>
              <el-col :span="6">
                <p>库区名称</p>
                <span>{{ detaiObj.areaName }}</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>

      </el-collapse>
    </el-card>
    <!-- 第二个折叠面板 -->
    <el-card style="margin-top:20px">
      <el-collapse v-model="activeNames1" @change="handleChange">
        <el-collapse-item title="货主信息" name="1">
          <div class="baseInfo">
            <el-row>
              <el-col :span="6">
                <p>货主编号</p>
                <span>{{ detaiObj.ownerCode }}</span>
              </el-col>
              <el-col :span="6">
                <p>货主名称</p>
                <span>{{ detaiObj.ownerName }}</span>
              </el-col>
              <el-col :span="6">
                <p>联系人</p>
                <span>{{ detaiObj.owner.personName }}</span>
              </el-col>
              <el-col :span="6">
                <p>联系电话</p>
                <span>{{ detaiObj.owner.phone }}</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>

      </el-collapse>
    </el-card>
    <!-- 第三个折叠面板 -->
    <el-card style="margin-top:20px">
      <el-collapse v-model="activeNames2" @change="handleChange">
        <el-collapse-item title="货品信息" name="1">
          <div class="baseInfo">
            <el-row>
              <el-col :span="6">
                <p>运单编号</p>
                <span>{{ detaiObj.ownerCode }}</span>
              </el-col>
              <el-col :span="6">
                <p>承运商</p>
                <span>{{ detaiObj.ownerName }}</span>
              </el-col>
              <el-col :span="6">
                <p>计划出库时间</p>
                <span>{{ detaiObj.owner.personName }}</span>
              </el-col>
              <el-col :span="6">
                <p>司机名称</p>
                <span>{{ detaiObj.owner.phone }}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <p>司机电话</p>
                <span>{{ detaiObj.ownerCode }}</span>
              </el-col>
              <el-col :span="6">
                <p>收货人名称</p>
                <span>{{ detaiObj.ownerName }}</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>

      </el-collapse>
    </el-card>
    <!-- 第四个折叠面板 -->
    <el-card style="margin-top:20px">
      <el-collapse v-model="activeNames3" @change="handleChange">
        <el-collapse-item title="运输信息" name="1">
          <div class="baseInfo">
            <el-row>
              <el-col :span="6">
                <p>运单编号</p>
                <span>{{ detaiObj.billCode }}</span>
              </el-col>
              <el-col :span="6">
                <p>承运商</p>
                <span>{{ detaiObj.carrierName }}</span>
              </el-col>
              <el-col :span="6">
                <p>计划出库时间</p>
                <span>{{ detaiObj.planOutTime }}</span>
              </el-col>
              <el-col :span="6">
                <p>司机名称</p>
                <span>{{ detaiObj.driverName }}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <p>司机电话</p>
                <span>{{ detaiObj.driverPhone }}</span>
              </el-col>
              <el-col :span="6">
                <p>收货人名称</p>
                <span>{{ detaiObj.receiverName }}</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>

      </el-collapse>
    </el-card>
    <!-- 第五个折叠面板 -->
    <el-card style="margin-top:20px">
      <el-collapse v-model="activeNames4" @change="handleChange">
        <el-collapse-item title="任务信息" name="1">
          <div class="baseInfo">
            <el-row>
              <el-col :span="6">
                <p>货主编号</p>
                <span>{{ detaiObj.ownerCode }}</span>
              </el-col>
              <el-col :span="6">
                <p>货主名称</p>
                <span>{{ detaiObj.ownerName }}</span>
              </el-col>
              <el-col :span="6">
                <p>联系人</p>
                <span>{{ detaiObj.owner.personName }}</span>
              </el-col>
              <el-col :span="6">
                <p>联系电话</p>
                <span>{{ detaiObj.owner.phone }}</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>

      </el-collapse>
    </el-card>
  </div>
</template>

<script>
import { getDetails } from '@/api/storageOut'
export default {

  data() {
    return {
      activeNames: ['1'],
      activeNames1: ['2'],
      activeNames2: ['3'],
      activeNames3: ['4'],
      activeNames4: ['5'],
      detaiObj: {},
      timeList: []
    }
  },
  created() {
    this.getDetails()
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    async getDetails() {
      try {
        const { data } = await getDetails(this.$route.params.id)
        console.log(data)
        this.detaiObj = data
        data.timeArray.forEach(ele => {
          const arr = ['新建', '拣货中', '拣货完成', '交接中', '交接完成']
          this.timeList = arr.map(ele1 => {
            const obj = {}
            obj.title = ele1
            obj.time = ele
            return obj
          })
        })
        // console.log(this.timeList)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.baseInfo {
    background: #fdfcf9;
    border: 1px solid #f7f2f1;
    padding: 25px 30px;
    margin-top: 20px;
}
p {
  margin: 20px 0 0;
  color: #887e7e;
}
span {
  font-size: 13px;
  color: #303133;
  line-height: 1.769230769230769;
}
.el-collapse{
  border: unset;
}
 .el-collapse-item__wrap{
  border: none ;
}
</style>
