<template>
    <div class="weekend">
        <div class="item">
            <div class="item-img">
                <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt="">
            </div>
            <div class="item-main">
                <div class="item-title">故宫</div>
                <div class="item-desc">在帝都过周末，不仅仅是城中游！</div>
            </div>
        </div>
        <div class="item">
            <div class="item-img">
                <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt="">
            </div>
            <div class="item-main">
                <div class="item-title">故宫</div>
                <div class="item-desc">在帝都过周末，不仅仅是城中游！</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less" scoped>
    .weekend {
        .item {
            padding: .2rem 0 0;
            
            &:last-child {
                border-bottom: 0;
            }
        }
        .item-img {
            width: 100%;
            height: 2.5rem;
            margin-right: .2rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .item-title {
            height: .4rem;
            font-size: .30rem;
            line-height: .4rem;
            padding: .2rem .2rem 0;
            color: #212121;
        }
        .item-desc {
            height: .4rem;
            line-height: .4rem;
            padding: 0 .2rem;
            font-size: .24rem;
            color: #616161;
        }
    }
</style>
