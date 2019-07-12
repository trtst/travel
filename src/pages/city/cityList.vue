<template>
    <div class="list" ref="wrapper">
        <div>
            <h2 class="title">您的位置：</h2>
            <div class="list-main">
                <span class="item">北京</span>
            </div>
            <h2 class="title" ref="top">热门城市：</h2>
            <div class="list-main">
                <span class="item" v-for="item of hot" :key="item.id">{{item.name}}</span>
            </div>
            <div v-for="(item, key) of cities" :key="key" :ref="key">
                <h2 class="title">{{key}}</h2>
                <div class="list-main list-main-row">
                    <div class="item-row" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: 'CityList',
        props: {
            cities: Object,
            hot: Array,
            letter: String
        },
        data () {
            return {
                touchStatus: false
            }
        },
        computed: {
            letters () {
                const letters = []
                for (let i in this.cities) {
                    letters.unshift([i, this.$refs[i][0].offsetTop])
                }
                return letters
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.wrapper)
            this.scroll.on('scrollEnd', () => {
                const top = Math.floor(Math.abs(this.scroll.y))
                for (let k of this.letters) {
                    if (top > k[1] - 10) {
                        this.$emit('letter', k[0])
                        break
                    }
                }
            })
        },
        watch: {
            letter () {
                if (this.letter) {
                    const el = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(el, 500)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .list {
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background: #f5f5f5;
        .title {
            padding: 0 .2rem;
            line-height: .48rem;
        }
        .list-main {
            padding: .1rem;
            font-size: 0;
            background: #fff;
        }
        .item {
            display: inline-block;
            width: calc(100% / 3 - 2px - .2rem);
            padding: .1rem 0;
            margin: .1rem;
            text-align: center;
            font-size: .24rem;
            border-radius: .06rem;
            border: 1px solid #ccc;
        }
        .list-main-row {
            padding: 0;
        }
        .item-row {
            display: block;
            width: 100%;
            padding: .2rem;
            border-bottom: 1px solid #ccc;
            font-size: .24rem;
            &:last-child {
                border: 0;
            }
        }
    }
</style>
