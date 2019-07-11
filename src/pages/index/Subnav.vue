<template>
    <div class="subnav">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" /> <div v-text="item.desc"></div></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSubnav',
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    slidesPerView: 4,
                    slidesPerColumn: 2
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .subnav {
        width: 100%;
        background: #eee;
        overflow: hidden;
        .swiper-slide {
            text-align: center;
        }
        .swiper-img {
            width: 1rem;
            margin: .3rem 0 .2rem;
        }
    }
</style>
<style>
    .subnav .swiper-pagination-bullet-active {
        background: rgba(0,175,190,.8);
    }
    .swiper-slide {
        height: 100px;
    }
</style>
