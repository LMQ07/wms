<template>
  <div>
    <SearchCard :config="setForm" />
    <Table :thead="tableLabel" :tableDate="tableData">
      <template #btn>
        <el-button round>新增</el-button>
      </template>
    </Table>
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
          children: [
            { label: "aaa", prop: 1 },
            { label: "bbb", prop: 2 },
          ],
        },
        {
          label: "仓库地址",
          prop: "region",
        },
      ],
      tableLabel: [
        {
          prop: "name",
          label: "名字",
        },
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "address1",
          label: "地址",
        },
        {
          prop: "address2",
          label: "地址",
        },
        {
          prop: "address3",
          label: "地址",
        },
        {
          prop: "address4",
          label: "地址",
        },
        {
          prop: "address5",
          label: "地址",
        },
        {
          prop: "address6",
          label: "地址",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄",
          address4: "上海市普陀区金沙江路 1518 弄",
          address5: "上海市普陀区金沙江路 1518 弄",
          address6: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄",
          address4: "上海市普陀区金沙江路 1518 弄",
          address5: "上海市普陀区金沙江路 1518 弄",
          address6: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄",
          address4: "上海市普陀区金沙江路 1518 弄",
          address5: "上海市普陀区金沙江路 1518 弄",
          address6: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address1: "上海市普陀区金沙江路 1518 弄",
          address2: "上海市普陀区金沙江路 1518 弄",
          address3: "上海市普陀区金沙江路 1518 弄",
          address4: "上海市普陀区金沙江路 1518 弄",
          address5: "上海市普陀区金沙江路 1518 弄",
          address6: "上海市普陀区金沙江路 1518 弄",
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
