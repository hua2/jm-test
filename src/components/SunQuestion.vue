<template>
    <div id="sun-ques">
        <div class="title">
            {{showWord}}
        </div>
        <transition name="fade">
            <div class="img" v-if="showUnKnow">
                <img src="../assets/sun-rise.png" alt="" :class="{active:active ==='a'}">
                <img src="../assets/sun-down.png" alt="" :class="{active:active ==='b'}">
            </div>
        </transition>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">
                <div class="choose-content" @click="chooseAnswer('a')">
                    <span class="button" :class="{active:active ==='a'}"></span>
                    <span class="text">日出</span>
                </div>
                <div class="choose-content" @click="chooseAnswer('b')">
                    <span class="button" :class="{active:active ==='b'}"></span>
                    <span class="text">日落</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "SunQuestion",
        data() {
            return {
                word: "你更喜欢日出，还是日落？",
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
                    this.$bus.$emit("answer", {id: 1, answer: ans});
                }, 1000);

            }
        }
    }
</script>

<style scoped>
    #sun-ques {
        width: 100%;
        height: 100%;
        background: url("../assets/bg-sun.png");
        background-size: 100% 100%;
    }
    .title {
        width: calc(100% - 0.56rem);
        height: 1.5rem;
        padding: 2.08rem 0 0.2rem 0.56rem;
        font-size: 0.28rem;
        color: #fff;
        letter-spacing: 0.08rem;
        font-weight: 900;
    }

    .img {
        width: 100%;
        height: 3.42rem;
        padding: 0.15rem 0;
        display: flex;
        justify-content: center;
    }

    .img img {
        width: 2.58rem;
        opacity: 0.6;
        margin: 0 0.35rem;
        transition: opacity .5s;
        box-shadow: -1px 1px 3px 5px rgba(0, 0, 0, 0.8);
    }

    .img img.active {
        opacity: 1;
    }

    .choose {
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.36rem;
        font-weight: 300;
        color: #fff;
        display: flex;
        justify-content: center;
    }

    .choose .choose-content {
        width: 2.58rem;
        margin: 0 0.35rem;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .choose-content .text {
        width: 1rem;
        display: block;
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
        transition: opacity 2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }


</style>
