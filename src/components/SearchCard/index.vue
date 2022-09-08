<template>
  <el-card class="box-card">
    <el-row type="flex">
      <el-col :span="18">
        <el-form
          label-position="top"
          label-width="50px"
          :model="form"
          class="card-form"
          ref="formRef"
        >
          <el-col :span="8" v-for="item in config" :key="item.prop">
            <el-form-item :label="item.label">
              <el-select
                v-if="item.type == 'select'"
                v-model="form[item.prop]"
                placeholder="请选择活动区域"
              >
                <el-option
                  v-for="item1 in item.children"
                  :key="item1.prop"
                  :label="item1.label"
                  :value="item1.value"
                ></el-option>
              </el-select>
              <el-input
                v-else
                v-model="form[item.prop]"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-col>
      <el-col class="right" :span="6" style="height: 70px">
        <el-button round class="search-btn" @click="getDate">搜索</el-button>
        <el-button round class="reset-btn" @click="resetForm">重置</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    config: {
      type: Array,
    },
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    resetForm() {
      this.$parent.getwarehouseList();
      this.$refs.formRef.resetFields();
      this.form = {};
    },
    getDate() {
      if (!Object.keys(this.form).length) {
        this.$message.warning("请填写搜索信息");
      } else {
        console.log(1);
        this.$emit("getFormData", this.form);
      }
    },
  },
};
</script>

<style lang="scss">
.box-card {
  padding: 10px;
  border-radius: 12px;
  .card-form {
    display: flex;
    flex-wrap: wrap;
    .el-col {
      padding: 0 10px;
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
  .right {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-end;
    .el-button {
      color: #332929;
      border: unset;
      background-color: #f8f5f5;

      &.search-btn {
        background-color: #ffb200;
      }
      &.reset-btn {
      }
    }
  }
}
</style>
