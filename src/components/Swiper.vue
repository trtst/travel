<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" /></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props: {
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: true,
                    loop: true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .swiper {
        width: 100%;
        background: #eee;
        overflow: hidden;
        .swiper-img {
            width: 100%;
        }
    }
</style>
<style>
    .swiper .swiper-pagination-bullet-active {
        background: #fff;
    }
</style>
