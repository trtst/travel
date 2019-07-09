<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg" /></swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
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
