<template>
    <div id="dream-ques">
        <div class="title pre">{{showWord}}</div>
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
                    this.$bus.$emit("answer", {id: 2, answer: ans});
                }, 2000);

            }
        }
    }
</script>

<style scoped>
    #dream-ques {
        width: 100%;
        height: 100%;
    }

    .title {
        height: 1.07rem;
    }

    .choose {
        padding-top: 0.73rem;
    }

    .choose .choose-content {
        width: fit-content;
        height: 0.22rem;
        margin: 0;
        padding: 0.13rem 0 0.13rem 0.58rem;
    }

    .choose-content .text {
        width: fit-content;
        height: 0.22rem;
        font-size: 0.16rem;
        line-height: 0.22rem;;
    }
</style>
