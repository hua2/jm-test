<template>
    <div id="window-ques">
        <div class="title pre">{{showWord}}</div>
        <transition name="fade">
            <div class="img" v-if="showUnKnow">
                <img src="../assets/window.png" alt="" class="ans-img" :class="{active:!active}">
                <img src="../assets/cloud.png" alt="" class="ans-img" :class="{active:active ==='a'}">
                <img src="../assets/meteor.png" alt="" class="ans-img" :class="{active:active ==='b'}">
                <img src="../assets/kun.png" alt="" class="ans-img" :class="{active:active ==='c'}">
                <img src="../assets/people.png" alt="" id="people">
            </div>
        </transition>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">
                <div class="choose-line">
                    <div class="choose-content" @click="chooseAnswer('a')">
                        <span class="button" :class="{active:active ==='a'}"></span>
                        <span class="text">浮云 </span>
                        <div class="choose-active" v-if="active ==='a'"></div>
                    </div>
                    <div class="choose-content" @click="chooseAnswer('b')">
                        <span class="button" :class="{active:active ==='b'}"></span>
                        <span class="text">流星</span>
                        <div class="choose-active" v-if="active ==='b'"></div>
                    </div>
                </div>
                <div class="choose-content" @click="chooseAnswer('c')">
                    <span class="button" :class="{active:active ==='c'}"></span>
                    <span class="text">鲲鹏</span>
                    <div class="choose-active" v-if="active ==='c'"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "WindowQuestion",
        data() {
            return {
                word: "你望着窗外怔怔出神\n突然天空有不明物体经过\n你觉得它是什么？",
                showWord: '',
                showUnKnow: false,
                active: undefined,
                chooseAnswerId: undefined
            }
        },
        created() {
            let i = 0;
            let timer;
            const that = this;
            timer = setInterval(function () {
                that.showWord = that.word.substr(0, i);
                i++;
                if (that.showWord === that.word) {
                    clearInterval(timer);
                    that.showUnKnow = true
                }
            }, 100);
        },
        methods: {
            chooseAnswer: function (ans) {
                this.active = ans;
                if (this.chooseAnswerId) {
                    clearTimeout(this.chooseAnswerId)
                }
                this.chooseAnswerId = setTimeout(() => {
                    this.$bus.$emit("answer", {id: 6, answer: ans});
                }, 2000)

            }
        }
    }
</script>

<style scoped>
    #window-ques {
        width: 100%;
        height: 100%;
    }

    .title {
        height: 0.6rem;
    }

    .img {
        width: 100%;
        height: 2.5rem;
        padding-top: 0.2rem;
    }

    .img img {
        opacity: 1;
        box-shadow: unset;
        width: 100%;
        margin: 0;
        height: 100%;
        z-index: 101;
    }

    .choose {
        padding: 0.58rem 0.89rem 0 0.7rem;
    }

    .choose .choose-line {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.46rem;
    }

    .choose .choose-content {
        width: fit-content;
        height: 0.22rem;
        margin: 0;
        padding: 0;
    }

    .choose-content .text {
        width: fit-content;
        height: 0.22rem;
        font-size: 0.16rem;
        line-height: 0.22rem;;
    }

    .choose-active{
        width: 0.8rem;
        height: 0.8rem;
        left: -0.32rem;
        top: -0.26rem;
    }
    .img img.ans-img {
        width: 2.9rem;
        height: 1.65rem;
        position: absolute;
        z-index: 100;
        padding: 0.35rem 0.39rem 0.5rem 0.44rem;
        opacity: 0;
        transition: opacity 1s;
    }

    .img .ans-img.active {
        opacity: 1;
    }

</style>
