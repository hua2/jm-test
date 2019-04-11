<template>
    <div id="dream-ques">
        <div class="title">{{showWord}}</div>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">

            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "MovieQuestion",
        data() {
            return {
                word: "午饭后\n独自去看电影\n你会选择剩下的那个座位？",
                showWord: '',
                showUnKnow: false,
                active: undefined
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
            chooseAnswer: function (a) {
                this.active = a;
                setTimeout(() => {
                    this.$bus.$emit("answer", a);
                }, 200);

            }
        }
    }
</script>

<style scoped>
    #dream-ques {
        width: 100%;
        height: 100%;
        background: url("../assets/bg-3.png");
        background-size: 100% 100%;
    }

    .title {
        width: calc(100% - 0.56rem);
        height: 2.5rem;
        line-height: 0.4rem;
        padding: 2.08rem 0 0.2rem 0.56rem;
        font-size: 0.28rem;
        letter-spacing: 0.08rem;
        font-weight: 900;
        white-space: pre;
        color: rgba(255,255,255,1);
    }
    .choose {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.32rem;
        font-weight: 100;
        color: #fff;
        display: flex;
        flex-direction: column;
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }


</style>
