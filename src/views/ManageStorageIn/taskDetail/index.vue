<template>
  <div class="taskDtail">
    <div class="progress">
      上货进度
    </div>
    <dialogeVue />
  </div>
</template>

<script>
import dialogeVue from './components/dialoge.vue'
export default {
  components: { dialogeVue }

}
</script>

<style lang="scss" scoped>
.taskDtail{
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  min-height: 309px;
  .progress{
    padding: 32px 0 40px 20px;
    height: 72px;
  }
}
</style>
