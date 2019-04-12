<template>
    <div id="dream-ques">
        <div class="title">{{showWord}}</div>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">
                <div class="choose-content" @click="chooseAnswer('a')">
                    <span class="button" :class="{active:active ==='a'}"></span>
                    <span class="text">最近可能倒大霉了</span>
                </div>
                <div class="choose-content" @click="chooseAnswer('b')">
                    <span class="button" :class="{active:active ==='b'}"></span>
                    <span class="text">大概是运气不好，没什么大不了了</span>
                </div>
                <div class="choose-content" @click="chooseAnswer('c')">
                    <span class="button" :class="{active:active ==='c'}"></span>
                    <span class="text">梦是反的，一定预示着好运</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "DreamQuestion",
        data() {
            return {
                word: "暮色来临\n你做噩梦了\n还伴随着左腿抽筋\n你一面揉腿，一面想？",
                showWord: '',
                showUnKnow: false,
                active: undefined,
                chooseAnswerId:undefined
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
                if(this.chooseAnswerId){
                    clearTimeout(this.chooseAnswerId)
                }
                this.chooseAnswerId = setTimeout(() => {
                    this.$bus.$emit("answer", {id: 2, answer: ans});
                }, 1000);

            }
        }
    }
</script>

<style scoped>
    #dream-ques {
        width: 100%;
        height: 100%;
        background: url("../assets/bg-dream.png");
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
        width: fit-content;
        height: 3rem;
        margin: 0.6rem auto 0 auto;
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
