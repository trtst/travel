<template>
    <div>
        <i-header></i-header>
        <i-swiper :list="swiperList"></i-swiper>
        <i-subnav :list="subList"></i-subnav>
        <i-likelist :list="likeList"></i-likelist>
        <i-weekend :list="weekendList"></i-weekend>
    </div>
</template>

<script>
    import iHeader from '@/components/Header'
    import iSwiper from '@/components/Swiper'
    import iSubnav from '@/pages/index/Subnav'
    import iLikelist from '@/pages/index/Likelist'
    import iWeekend from '@/pages/index/Weekend'
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: 'index',
        data () {
            return {
                swiperList: [],
                subList: [],
                likeList: [],
                weekendList: [],
                lastCity: ''
            }
        },
        components: {
            iHeader,
            iSwiper,
            iSubnav,
            iLikelist,
            iWeekend
        },
        mounted () {
            this.lastCity = this.city
            this.getHomeInfo()
        },
        computed: {
            ...mapState(['city'])
        },
        methods: {
            getHomeInfo () {
                axios.get('/api/index.json?city=' + this.city).then((res) => {
                    res = res.data
                    if (res.ret && res.data) {
                        const data = res.data
                        this.swiperList = data.swiperList
                        this.subList = data.iconList
                        this.likeList = data.recommendList
                        this.weekendList = data.weekendList
                    }
                })
            }
        },
        activated () {
            if (this.lastCity !== this.city) {
                this.lastCity = this.city
                this.getHomeInfo()
            }
        }
    }
</script>

<style>
</style>
