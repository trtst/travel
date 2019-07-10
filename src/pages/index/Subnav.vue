<template>
    <div class="subnav">
        <swiper :options="swiperOption">
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <swiper-slide>I'm Slide 8</swiper-slide>
            <swiper-slide>I'm Slide 9</swiper-slide>
            <swiper-slide>I'm Slide 10</swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSubnav',
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

<style>
    .subnav .swiper-pagination-bullet-active {
        background: rgba(0,175,190,.8);
    }
    
    .swiper-slide {
        height: 100px;
    }
</style>
