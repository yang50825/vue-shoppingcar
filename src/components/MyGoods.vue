<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="gObj.id"
          v-model="gObj.goodsState"
        />
        <label class="custom-control-label" :for="gObj.id">
          <img :src="gObj.goodsImg" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ gObj.goodsName }}</div>
      <div class="bottom">
        <span class="price">¥ {{ gObj.goodsPrice }}</span>
        <span> <MyCount :obj="gObj"></MyCount> </span>
      </div>
    </div>
  </div>
</template>

<script>
import MyCount from './MyCount.vue'

export default {
  name: 'MyGoods',
  props: {
    gObj: Object,
  },
  components: {
    MyCount,
  },
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
