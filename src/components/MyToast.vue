<template>
    <div class="toast">内容</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .toast {
        position: fixed;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        padding: .1rem;
        background-color: rgba(0, 0, 0, .35);
        border-radius: .05rem;
        color: #fff;
    }
</style>
