<template>
    <div class="likelist">
        <div class="item" v-for="item of list" :key="item.id">
            <div class="item-img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="item-main">
                <div class="item-title" :text="item.title">故宫</div>
                <div class="item-desc" :text="item.desc">在帝都过周末，不仅仅是城中游！</div>
                <div class="item-bottom">
                    <span class="item-price">¥<em class="item-price-num">78</em></span>起
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeLike',
        props: {
            list: Array
        }
    }
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
