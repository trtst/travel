<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import cityHeader from '@/pages/city/cityHeader'
    import citySearch from '@/pages/city/citySearch'
    import cityList from '@/pages/city/cityList'
    import cityAlphabet from '@/pages/city/alphabet'
    export default {
        name: 'City',
        data () {
            return {
                hotCities: [],
                cities: {}
            }
        },
        components: {
            cityHeader,
            citySearch,
            cityList,
            cityAlphabet
        },
        methods: {
            getCityInfo () {
                axios.get('/api/city.json').then((res) => {
                    res = res.data
                    if (res.ret && res.data) {
                        const data = res.data
                        this.cities = data.cities
                        this.hotCities = data.hotCities
                    }
                })
            }
        },
        mounted () {
            this.getCityInfo()
        }
    }
</script>

<style lang="less" scoped>
</style>
