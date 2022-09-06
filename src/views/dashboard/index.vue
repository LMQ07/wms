<template>
  <div>
    <SearchCard :config="setForm" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      form: {
        name: "",
        region: "",
        type: "",
      },
      setForm: [
        {
          label: "仓库编号",
          prop: "id",
        },
        {
          label: "仓库名称",
          prop: "name",
        },
        {
          label: "仓库状态",
          prop: "status",
          type: "select",
        },
        {
          label: "仓库地址",
          prop: "region",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  .el-form--label-top {
    display: flex;
    .el-form-item {
      flex: 1;
      width: 150px;
    }
  }
}
</style>
