<template>
  <div class="wrapper">
    <Static-Part />
    <My-Nearby />
  </div>
    <My-Docker />
</template>

<script>
import MyDocker from './MyDocker.vue'
import MyNearby from './MyNearby.vue'
import StaticPart from './StaticPart.vue'
export default {
  components: { StaticPart, MyNearby, MyDocker },
  name: 'MyHome'
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
}
</style>
