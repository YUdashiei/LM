<template>
    <div class="wrapper">
      <My-Top-Area />
      <My-Product-List />
      <My-Order />
    </div>
</template>

<script>
import MyOrder from './MyOrder.vue'
import MyProductList from './MyProductList.vue'
import MyTopArea from './MyTopArea.vue'

export default {
  components: { MyTopArea, MyProductList, MyOrder },
  name: 'MyOrderConfirmation'
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
