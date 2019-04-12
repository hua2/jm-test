<template>
    <div id="dream-ques">
        <div class="content">
            <div class="title">{{showWord}}</div>
            <transition name="fade">
                <div id="seats" v-if="showUnKnow">
                    <div class="choose">
                        <span class="empty"></span>
                        <span class="option" @click="chooseAnswer('a')"></span>
                        <span class="empty"></span>
                        <span class="select"></span>
                        <span class="empty"></span>
                    </div>
                    <div class="choose">
                        <span class="empty"></span>
                        <span class="select"></span>
                        <span class="select"></span>
                        <span class="select"></span>
                        <span class="select"></span>
                    </div>
                    <div class="choose">
                        <span class="select"></span>
                        <span class="select"></span>
                        <span class="option" @click="chooseAnswer('c')"></span>
                        <span class="select"></span>
                        <span class="empty"></span>
                    </div>
                    <div class="choose">
                        <span class="empty"></span>
                        <span class="select"></span>
                        <span class="select"></span>
                        <span class="empty"></span>
                        <span class="empty"></span>
                    </div>
                    <div class="choose">
                        <span class="empty"></span>
                        <span class="select"></span>
                        <span class="select"></span>
                        <span class="empty"></span>
                        <span class="option" @click="chooseAnswer('b')"></span>
                    </div>
                    <div class="choose example">
                        <span class="option"></span>
                        <span class="select"></span>
                        <span class="empty"></span>
                    </div>
                    <div class="choose text">
                        <span>可选</span>
                        <span>已选</span>
                        <span>空座</span>
                    </div>
                </div>
            </transition>
        </div>
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
                    this.$bus.$emit("answer", {id: 3, answer: ans});
                }, 1000);

            }
        }
    }
</script>

<style scoped>
    #dream-ques {
        width: 100%;
        height: 100%;
        background: url("../assets/bg-movie.png");
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .content {
        height: 9.58rem;
    }
    .title {
        width: calc(100% - 0.56rem);
        height: 2.5rem;
        line-height: 0.4rem;
        padding: 0 0 0.2rem 0.56rem;
        font-size: 0.28rem;
        letter-spacing: 0.08rem;
        font-weight: 900;
        white-space: pre;
        color: rgba(255, 255, 255, 1);
    }

    .choose {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .choose span {
        margin: 0.2rem 0.2rem;
    }

    .choose.example span {
        margin: 0.2rem 0.4rem;
    }

    .choose.text span {
        width: 0.72rem;
        text-align: center;
        display: block;
        font-weight: 400;
        margin: 0 0.4rem;
        height: 0.4rem;
        line-height: 0.4rem;
    }

    .choose.text span:nth-child(1) {
        color: rgba(255, 255, 255, 1);
    }

    .choose.text span:nth-child(2) {
        color: rgba(140, 140, 140, 1);
    }

    .choose.text span:nth-child(3) {
        color: rgba(140, 140, 140, 1);
    }

    .choose .empty {
        width: 0.72rem;
        height: 0.68rem;
        background: url("../assets/empty.png");
        background-size: 100% 100%;

    }

    .choose .option {
        width: 0.72rem;
        height: 0.68rem;
        background: url("../assets/option.png");
        background-size: 100% 100%;

    }

    .choose .select {
        width: 0.72rem;
        height: 0.68rem;
        background: url("../assets/select.png");
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
