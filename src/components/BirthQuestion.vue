<template>
    <div id="birth-ques">
        <div class="title pre">{{showWord}}</div>
        <transition name="fade">
            <div class="img" v-if="showUnKnow">
                <img src="../assets/sunset.png" alt="" :class="{active:active ==='a'}">
            </div>
        </transition>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">
                <div class="choose-content" @click="chooseAnswer('a')" style=" padding-right: 0.16rem;">
                    <span class="button" :class="{active:active ==='a'}"></span>
                    <span class="text">自己一个人过，保持低调 </span>
                </div>
                <div class="choose-content" @click="chooseAnswer('b')">
                    <span class="button" :class="{active:active ==='b'}"></span>
                    <span class="text">静静等待，看哪个朋友记得</span>
                </div>
                <div class="choose-content" @click="chooseAnswer('c')">
                    <span class="button" :class="{active:active ==='c'}"></span>
                    <span class="text">召集朋友，办个热闹的派对</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "BirthQuestion",
        data() {
            return {
                word: "新的一天结束了\n夜晚的空气引人沉思\n你想起周末是自己的生日，你会？",
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
            }, 200);
        },
        methods: {
            chooseAnswer: function (ans) {
                this.active = ans;
                if (this.chooseAnswerId) {
                    clearTimeout(this.chooseAnswerId)
                }
                this.chooseAnswerId = setTimeout(() => {
                    this.$bus.$emit("answer", {id: 5, answer: ans});
                }, 1000);

            }
        }
    }
</script>

<style scoped>
    #birth-ques {
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
        box-shadow: unset;
        opacity:1;
        width: 100%;
        margin: 0;
        height: 100%;
    }

    .choose {
        padding-top: 0.17rem;
    }

    .choose .choose-content {
        width: fit-content;
        height: 0.22rem;
        margin: 0 auto;
        padding: 0.13rem 0;
    }

    .choose-content .text {
        width: fit-content;
        height: 0.22rem;
        font-size: 0.16rem;
        line-height: 0.22rem;;
    }
</style>
