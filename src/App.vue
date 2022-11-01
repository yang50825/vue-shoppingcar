<template>
  <div>
    <MyHeader
      :title="myHeaderData.title"
      :backgroundColor="myHeaderData.backgroundColor"
    ></MyHeader>
    <div class="main">
      <MyGoods v-for="obj in list" :gObj="obj" :key="obj.id"></MyGoods>
    </div>
    <MyFooter @selectAll="selectAll" :list="list"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyGoods from './components/MyGoods.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  data() {
    return {
      // 头部样式
      myHeaderData: {
        title: '购物车案例',
        backgroundColor: 'red',
      },

      list: [],
    }
  },
  methods: {
    selectAll(val) {
      this.list.forEach((obj) => {
        obj.goodsState = val
      })
    },
  },
  created() {
    this.$axios({
      url: '/api/goods/queryGoodsList',
    }).then((res) => {
      //   console.log(res)
      this.list = res.data.data
    })
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
}
</script>

<style scoped>
.main {
  margin-top: 45px;
  margin-bottom: 50px;
}
</style>
