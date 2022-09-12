<template>
  <div>
    <UploadExcel :on-success="success" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UploadExcel from "@/components/UploadExcel";
export default {
  name: "Dashboard",
  methods: {
    success({ results }) {
      console.log(results);
    },
  },
  components: {
    UploadExcel,
  },
};
</script>

<style lang="scss" scoped></style>
