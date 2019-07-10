<template>
    <div>
        <i-header></i-header>
        <i-swiper></i-swiper>
        <i-subnav></i-subnav>
        <i-likelist></i-likelist>
        <i-weekend></i-weekend>
    </div>
</template>

<script>
    import iHeader from '@/components/Header'
    import iSwiper from '@/components/Swiper'
    import iSubnav from '@/pages/index/Subnav'
    import iLikelist from '@/pages/index/Likelist'
    import iWeekend from '@/pages/index/Weekend'
    export default {
        name: 'index',
        components: {
            iHeader,
            iSwiper,
            iSubnav,
            iLikelist,
            iWeekend
        }
    }
</script>

<style>
</style>
