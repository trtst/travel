<template>
    <div class="likelist">
        <div class="item">
            <div class="item-img">
                <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt="">
            </div>
            <div class="item-main">
                <div class="item-title">故宫</div>
                <div class="item-desc">在帝都过周末，不仅仅是城中游！</div>
                <div class="item-bottom">
                    <span class="item-price">¥<em class="item-price-num">78</em></span>起
                </div>
            </div>
        </div>
        <div class="item">
            <div class="item-img">
                <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt="">
            </div>
            <div class="item-main">
                <div class="item-title">故宫</div>
                <div class="item-desc">在帝都过周末，不仅仅是城中游！</div>
                <div class="item-bottom">
                    <span class="item-price">¥<em class="item-price-num">78</em></span>起
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
    .likelist {
        padding: 0 .2rem;
        .item {
            display: flex;
            padding: .2rem 0;
            border-bottom: 1px solid #e0e0e0;
            
            &:last-child {
                border-bottom: 0;
            }
        }
        .item-img {
            width: 2rem;
            height: 2rem;
            margin-right: .2rem;
            img {
                width: 100%;
            }
        }
        .item-main {
            flex: 1;
        }
        .item-title {
            height: .8rem;
            color: #212121;
            font-size: .32rem;
            line-height: .8rem;
        }
        .item-desc {
            height: .4rem;
            line-height: .4rem;
            color: #616161;
        }
        .item-bottom {
            height: .4rem;
            line-height: .4rem;
            padding-top: .3rem;
            .item-price {
                color: #ff8300;
            }
            .item-price-num {
                font-size: .4rem;
            }
        }
    }
</style>
