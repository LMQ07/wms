<template>
  <el-card class="add-box-card">
    <el-row type="flex">
      <el-form
        label-position="top"
        label-width="50px"
        :model="form"
        class="card-form"
        ref="formRef"
      >
        <el-col :span="8">
          <el-form-item label="仓库编码">
            <el-input v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="仓库名称">
            <el-input v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="仓库类型">
            <el-select v-model="form.a" placeholder="请选择活动区域">
              <el-option label="还好" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="省/区/市">
            <el-input v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8"></el-col>
        <el-col :span="16">
          <el-form-item label="详细地址">
            <el-input v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="仓库状态">
            <el-radio-group v-model="form.resource">
              <el-radio label="1">启用</el-radio>
              <el-radio label="0">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="仓库面巾">
            <el-input v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="负责人">
            <el-input v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="联系电话">
            <el-input v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-form>

      <!-- <el-col class="right" :span="6" style="height: 70px">
        <el-button round class="search-btn" @click="getDate">搜索</el-button>
        <el-button round class="reset-btn" @click="resetForm">重置</el-button>
      </el-col> -->
    </el-row>
    <el-row type="flex" justify="center">
      <el-button round class="search-btn">返回</el-button>
      <el-button round class="reset-btn">提交</el-button>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style lang="scss">
.add-box-card {
  padding: 10px;
  border-radius: 12px;
  .card-form {
    display: flex;
    flex-wrap: wrap;
    .el-col {
      padding: 0 10px;
      margin-bottom: 20px;
      .el-form-item {
        margin-bottom: unset;
        .el-form-item__label {
          height: 30px;
          line-height: 30px;
          color: #887e7e;
          font-weight: 400;
        }
        .el-input__inner {
          background-color: #f8f5f5;
        }
      }
    }
  }

  .el-button {
    color: #332929;
    border: unset;
    background-color: #f8f5f5;
    height: 40px;
    line-height: 20px;
    padding: 1px 70px;
    margin: 0 20px;
    &.search-btn {
    }
    &.reset-btn {
      background-color: #ffb200;
    }
  }
}
</style>
