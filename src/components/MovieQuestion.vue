<template>
    <div id="movie-ques">
        <div class="title pre">{{showWord}}</div>
        <img src="../assets/movie-line.png" alt="" class="line">
        <transition name="fade">
            <div id="seats" v-if="showUnKnow">
                <div class="choose">
                    <span class="empty"></span>
                    <span class="option" @click="chooseAnswer('a')" :class="{active:active==='a'}"></span>
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
                    <span class="option" @click="chooseAnswer('c')" :class="{active:active==='c'}"></span>
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
                    <span class="option" @click="chooseAnswer('b')" :class="{active:active==='b'}"></span>
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
            }, 100);
        },
        methods: {
            chooseAnswer: function (ans) {
                this.active = ans;
                if (this.chooseAnswerId) {
                    clearTimeout(this.chooseAnswerId)
                }
                this.chooseAnswerId = setTimeout(() => {
                    this.$bus.$emit("answer", {id: 3, answer: ans});
                },500);

            }
        }
    }
</script>

<style scoped>

    #movie-ques {
        width: 100%;
        height: 100%;
        position: relative;
    }
    #seats{
        z-index: 101;
    }
    .line{
        position: absolute;
        width: 100%;
        height: auto;
        top: 1.04rem;
        z-index: 100;
    }

    .title {
        height: 0.8rem;
        padding-bottom: 0.49rem;
    }

    .choose {
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 100;
    }

    .choose span {
        margin: 0.1rem 0.1rem;
    }

    .choose.example {
        padding-top: 0.1rem;
    }

    .choose.example span {
        margin: 0.03rem 0.2rem;
    }

    .choose.text span {
        width: 0.36rem;
        text-align: center;
        display: block;
        font-weight: 400;
        margin: 0 0.2rem;
        height: 0.2rem;
        line-height: 0.2rem;
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
        width: 0.36rem;
        height: 0.34rem;
        background: url("../assets/empty.png");
        background-size: 100% 100%;

    }

    .choose .option {
        width: 0.36rem;
        height: 0.34rem;
        background: url("../assets/option.png");
        background-size: 100% 100%;
        z-index: 101;

    }
    .choose .option.active{
        background: url("../assets/movie-active.png");
        background-size: 100% 100%;

    }

    .choose .select {
        width: 0.36rem;
        height: 0.34rem;
        background: url("../assets/select.png");
        background-size: 100% 100%;
    }
</style>
