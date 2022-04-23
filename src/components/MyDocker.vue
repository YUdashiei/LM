<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item': true, 'docker__item--active': index === currentIndex}"
      :key="item.icon"
      >
      <router-link :to='item.to'>
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDocker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe8b9;', text: '首页', to: { name: 'MyHome' } },
      { icon: '&#xe70c;', text: '购物车', to: { name: 'MyCartList' } },
      { icon: '&#xe789;', text: '订单', to: { name: 'MyOrderList' } },
      { icon: '&#xe600;', text: '我的', to: { name: 'MyPersonalInfo' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      a {
        color: #1FA4FC;
      }
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
