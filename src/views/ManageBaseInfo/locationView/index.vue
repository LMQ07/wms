<template>
  <div class="classContainer">
    <div class="left">
      <p class="subject">库区选择</p>
      <el-select v-model="value" placeholder="请选择厂库">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="middle" />
    <div class="right">
      <p class="subject">库区总览</p>
    </div>
  </div>
</template>

<script>
import { getAllWareHouse } from '@/api/manageBaseInfo'
export default {
  mounted() {
    this.getDate()
  },
  methods: {
    async getDate() {
      const res = await getAllWareHouse()
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
  .classContainer{
    background: rgb(255, 255, 255);
    border-radius: 12px;
    box-shadow: rgb(144 142 142 / 17%) 0px 0px 6px 0px;
    margin: 10px 15px 30px;
    height: calc(100vh - 100px);
    .left{
      width: 263px;
    padding: 27px 19px 27px 20px;
    float: left;
    ::v-deep .el-select{
      display: block;
    }
    ::v-deep .el-select .el-input.is-focus .el-input__inner{
      border-color: #ffb200;
    }
    ::v-deep .el-input__inner{
      background-color: #f8f5f5;
    }
    }
    .middle{
    float: left;
    width: 10px;
    height: 100%;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(99, 97, 96, 0.1));
    }
    .right{
    padding: 27px 19px 27px 20px;
    float: left;
    height: 100%;
    width: calc(100% - 273px);
    }
  }
  .subject{
    font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #332929;
    line-height: 22px;
    margin: 0;
    margin-bottom: 19px;
    }
</style>
