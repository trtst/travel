<template>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
        <div class="search-content" v-show="keyword" ref="search">
            <ul>
                <li class="search-item"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >{{item.name}}</li>
                <li class="search-item" v-show="this.hasNoData">没有找到匹配的数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapMutations } from 'vuex'
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data () {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        computed: {
            hasNoData () {
                return !this.list.length
            }
        },
        methods: {
            handleCityClick (city) {
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        watch: {
            keyword () {
                const self = this
                if (self.timer) {
                    clearTimeout(self.timer)
                }
                if (!self.keyword) {
                    self.list = []
                    return
                }
                self.timer = setTimeout(() => {
                    const result = []
                    for (let i in self.cities) {
                        self.cities[i].forEach((item, index) => {
                            if (item.name.indexOf(self.keyword) > -1 || item.spell.indexOf(self.keyword) > -1) {
                                result.push(item)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.search, {
                click: true
            })
        }
    }
</script>

<style lang="less" scoped>
    @import '~styles/varibles.less';
    .search {
        height: .72rem;
        padding: 0 .1rem;
        background: @bgColor;
        .search-input {
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            padding: 0 .1rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            color: #666;
        }
        .search-content {
            z-index: 1;
            overflow: hidden;
            position: absolute;
            top: 1.58rem;
            left: 0;
            right: 0;
            bottom: 0;
            background: #eee;
            .search-item {
                line-height: .62rem;
                padding-left: .2rem;
                background: #fff;
                color: #666;
            }
        }
    }
</style>
