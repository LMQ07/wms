<template>
  <div>
    <SearchCard :config="setForm" />
    <Table :thead="tableLabel" :tableDate="tableData">
      <template #btn>
        <el-button round>新增仓库</el-button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
