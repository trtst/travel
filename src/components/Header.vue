<template>
    <div class="header">
        <div class="header-l">0</div>
        <div class="header-main">
            <input type="text" placeholder="输入内容">
        </div>
        <div class="header-r">2</div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
    .header {
        display: flex;
        height: .86rem;
        font-size: 0;
        color: #fff;
        background: #00bcd4;
        .header-l {
            display: inline-block;
            width: .64rem;
        }
        .header-main {
            display: inline-block;
            flex: 1;
            padding: .1rem 0;
        }
        .header-r {
            display: inline-block;
            width: 1.24rem;
        }
    }
</style>
