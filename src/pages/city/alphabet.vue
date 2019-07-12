<template>
    <ul class="alphabet">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            :class="{active:isActive==item}"
            @click="handleClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object,
            curIndex: String
        },
        data () {
            return {
                touchStatus: false,
                startY: 0,
                isActive: null,
                timer: null
            }
        },
        computed: {
            letters () {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            handleClick (e) {
                this.isActive = e.target.innerText
                this.$emit('letter', e.target.innerText)
            },
            handleTouchStart () {
                this.touchStatus = true
            },
            handleTouchMove (e) {
                if (this.touchStatus) {
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 79
                        const index = Math.floor((touchY - this.startY) / 20)
                        this.isActive = this.letters[index]
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('letter', this.letters[index])
                        }
                    }, 16)
                }
            },
            handleTouchEnd () {
                this.touchStatus = false
            }
        },
        watch: {
            curIndex () {
                if (this.curIndex) {
                    this.isActive = this.curIndex
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~styles/varibles.less';
    .alphabet {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        .item {
            line-height: .4rem;
            text-align: center;
            color: #333;
            &.active {
                color: @bgColor;
            }
        }
    }
</style>
