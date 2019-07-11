<template>
    <div class="weekend">
        <div class="item" v-for="item of list" :key="item.id">
            <div class="item-img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="item-main">
                <div class="item-title" :text="item.title">故宫</div>
                <div class="item-desc" :text="item.desc">在帝都过周末，不仅仅是城中游！</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeWeek',
        props: {
            list: Array
        }
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
