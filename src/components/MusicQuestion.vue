<template>
    <div id="music-ques">
        <div class="title pre">{{showWord}}</div>
        <transition name="fade">
            <div class="img" v-if="showUnKnow">
                <img id="pointer" src="../assets/pointer.png" alt="" class="pointer">
                <img id="player" src="../assets/player.png" alt="" class="player"
                     @click="musicStarted?stopMusicAnim():startMusicAnim()">
            </div>
        </transition>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">
                <div class="choose-content" @click="chooseAnswer('a')">
                    <span class="button" :class="{active:active ==='a'}"></span>
                    <span class="text">心有花木，向阳而生 </span>

                    <div class="choose-active" v-if="active ==='a'"></div>
                </div>
                <div class="choose-content" @click="chooseAnswer('b')">
                    <span class="button" :class="{active:active ==='b'}"></span>
                    <span class="text">凝视深渊，深渊回望</span>
                    <div class="choose-active" v-if="active ==='b'"></div>
                </div>
            </div>
        </transition>

        <audio id="question" preload="auto" loop>
            <source src="../assets/bg-question.mp3">
        </audio>
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
                chooseAnswerId: undefined,
                musicAnimId: undefined,
                instanceQuestion: undefined,
                musicStarted: false,
                musicRotate: 0,
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
                    that.showUnKnow = true;
                    setTimeout(() => {
                        that.startMusicAnim();
                    }, 1000);
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
                    this.$bus.$emit("answer", {id: 4, answer: ans});
                }, 500);

            },
            startPointerAnim: function () {
                let pointer = document.getElementById("pointer");
                if (!pointer) {
                    return;
                }
                pointer.style.transform = "rotate(30deg)";
                pointer.style["-moz-transform"] = "rotate(30deg)";
                pointer.style["-webkit-transform"] = "rotate(30deg)";
                pointer.style["-o-transform"] = "rotate(30deg)";
                pointer.style["-ms-transform"] = "rotate(30deg)";
            },
            stopPointerAnim: function () {
                let pointer = document.getElementById("pointer");
                if (!pointer) {
                    return;
                }
                pointer.style.transform = "rotate(0deg)";
                pointer.style["-moz-transform"] = "rotate(0deg)";
                pointer.style["-webkit-transform"] = "rotate(0deg)";
                pointer.style["-o-transform"] = "rotate(0deg)";
                pointer.style["-ms-transform"] = "rotate(0deg)";
            },
            startMusicAnim: function () {
                if (this.musicStarted) {
                    return;
                }
                this.startQuestionMusic();
                this.startPointerAnim();
                const that = this;
                this.musicAnimId = setInterval(function () {
                    let player = document.getElementById("player");
                    if (!player) {
                        return;
                    }
                    let rotateStyle = "rotate(" + that.musicRotate + "deg)";
                    player.style.transform = rotateStyle;
                    player.style["-moz-transform"] = rotateStyle;
                    player.style["-webkit-transform"] = rotateStyle;
                    player.style["-o-transform"] = rotateStyle;
                    player.style["-ms-transform"] = rotateStyle;
                    that.musicRotate += 6;
                    if (that.musicRotate > 360) {
                        that.musicRotate = 0;
                    }
                }, 40);
                this.musicStarted = true;
            },
            stopMusicAnim: function () {
                if (this.musicAnimId) {
                    clearInterval(this.musicAnimId);
                }
                this.stopQuestionMusic();
                this.stopPointerAnim();
                this.musicStarted = false;
            },
            startQuestionMusic: function () {
                // 播放音乐
                /* eslint-disable no-undef */
                if (this.instanceQuestion) {
                    this.instanceQuestion.paused = false;
                    return;
                }
                this.instanceQuestion = createjs.Sound.play("question", {loop: -1});
            },
            stopQuestionMusic: function () {
                // 仅暂停
                /* eslint-disable no-undef */
                this.instanceQuestion.paused = true;
            }
        },
        beforeDestroy() {
            this.stopMusicAnim();
        }
    }
</script>

<style scoped>
    #music-ques {
        width: 100%;
        height: 100%;
    }

    .title {
        height: 0.6rem;
    }

    .img {
        width: 100%;
        height: 3.3rem;
        display: flex;
        flex-direction: column;
        padding-top: 0;
    }

    .img img {
        opacity: 1;
        box-shadow: unset;
    }

    .img .pointer {
        width: 1.44rem;
        height: 0.65rem;
        margin: 0 auto;
        padding-left: 0.3rem;
        transform-origin: 0.42rem 0.12rem;
        transition: transform 1s;
        z-index: 999;
    }

    .img .player {
        width: 2.49rem;
        height: 2.49rem;
        margin: 0 auto;
    }

    .choose {
        padding-top: 0;
        padding-bottom: 0.85rem;
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
    .choose-active {
        width: 2.2rem;
        left: -0.45rem;
    }

</style>
