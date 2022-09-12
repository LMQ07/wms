<template>
  <div>
    查看出库单详情
  </div>
</template>

<script>
import { getDetails } from '@/api/storageOut'
export default {
  created() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      try {
        const res = await getDetails(this.$route.params.id)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>

</style>
