<template>
    <div class="header">
        <div class="header-l">
            <span class="icon back-icon">&#xe624;</span>
        </div>
        <div class="header-main">
            <span class="icon serach-icon">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-r">
                城市
                <span class="icon arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
    @import '~styles/varibles.less';

    .header {
        display: flex;
        height: @headerHeight;
        line-height: @headerHeight;
        padding: 0.12rem 0;
        font-size: 0;
        color: #fff;
        background: @bgColor;
        .header-l {
            display: inline-block;
            width: .64rem;
            text-align: center;
        }
        .header-main {
            display: inline-block;
            flex: 1;
            padding: 0 .1rem;
            line-height: @headerHeight;
            border-radius: 0.1rem;
            font-size: .28rem;
            color: #ccc;
            background: #fff;
        }
        .header-r {
            display: inline-block;
            width: 1.24rem;
            padding: 0 0.1rem;
            font-size: .28rem;
            text-align: right;
            color: #fff;
        }
        .back-icon {
            font-size: .4rem;
        }
        .arrow-icon {
            font-size: .2rem;
        }
    }
</style>
