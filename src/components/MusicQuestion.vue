<template>
    <div id="music-ques">
        <div class="title">{{showWord}}</div>
        <transition name="fade">
            <div class="img" v-if="showUnKnow">
                <img src="../assets/pointer.png" alt="" class="pointer">
                <img src="../assets/player.png" alt="" class="player">
            </div>
        </transition>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">
                <div class="choose-content" @click="chooseAnswer('a')">
                    <span class="button" :class="{active:active ==='a'}"></span>
                    <span class="text">心有花木，向阳而生 </span>
                </div>
                <div class="choose-content" @click="chooseAnswer('b')">
                    <span class="button" :class="{active:active ==='b'}"></span>
                    <span class="text">凝视深渊，深渊回望</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "MusicQuestion",
        data() {
            return {
                word: "你打开音乐\n望着窗外的天空\n听完后你的心情如何",
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
                    this.$bus.$emit("answer", {id: 4, answer: ans});
                }, 1000);

            }
        }
    }
</script>

<style scoped>
    #music-ques {
        width: 100%;
        height: 100%;
        background: url("../assets/bg-music.png");
        background-size: 100% 100%;
    }

    .title {
        width: calc(100% - 0.56rem);
        /*height: 2.5rem;*/
        line-height: 0.4rem;
        padding: 2.08rem 0 0.2rem 0.56rem;
        font-size: 0.28rem;
        letter-spacing: 0.08rem;
        font-weight: 900;
        white-space: pre;
        color: rgba(255, 255, 255, 1);
    }

    .img {
        width: 100%;
        height: 6.6rem;
        /*padding: 0.15rem 0;*/
        display: flex;
        /*justify-content: center;*/
        flex-direction: column;
    }

    .img .pointer {
        width: 2.6rem;
        height: 1.3rem;
        margin: 0 2.8rem;
    }

    .img .player {
        width: 4.98rem;
        height: 4.98rem;
        margin: 0 1.25rem;
    }

    .choose {
        width: fit-content;
        height: 2rem;
        margin: 0 auto;
        line-height: 1rem;
        font-size: 0.32rem;
        font-weight: 100;
        color: #fff;
        display: flex;
        flex-direction: column;
    }

    .choose .choose-content {
        width: 100%;
        text-align: center;
        display: flex;
    }

    .choose-content .text {
        padding-left: 0.2rem;
        display: block;
        font-weight: 400;
        letter-spacing: 0.02rem;
    }

    .choose-content .button {
        width: 0.26rem;
        height: 0.28rem;
        display: block;
        margin: auto 0;
        background: url("../assets/unselected.png");
        background-size: 100% 100%;
    }

    .choose-content .button.active {
        background: url("../assets/selected.png");
        background-size: 100% 100%;
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }


</style>
