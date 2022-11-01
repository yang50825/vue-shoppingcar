<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="obj.goodsCount === 1"
      @click="obj.goodsCount--"
    >
      -
    </button>
    <input type="number" class="form-control inp" v-model="obj.goodsCount" />
    <button type="button" class="btn btn-light" @click="obj.goodsCount++">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  watch: {
    obj: {
      deep: true,
      handler() {
        if (this.obj.goodsCount < 0) {
          this.obj.goodsCount = 1
        }
      },
    },
  },
  props: {
    obj: Object,
  },
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
