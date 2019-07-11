<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <span class="icon header-back">&#xe624;</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'CityHeader'
    }
</script>

<style lang="less" scoped>
    @import '~styles/varibles.less';
    .header {
        position: relative;
        overflow: hidden;
        height: @headerHeight;
        line-height: @headerHeight;
        text-align: center;
        color: #fff;
        padding: 0.12rem 0;
        background: @bgColor;
        font-size: .32rem;
        .header-back {
            position: absolute;
            top: .12rem;
            left: 0;
            width: .64rem;
            text-align: center;
            font-size: .4rem;
            color: #fff;
            cursor: pointer;
        }
    }
</style>
