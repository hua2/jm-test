<template>
    <div id="start-page">
        <div class="title">
            <h1>测一测你的能源属性</h1>
        </div>
        <transition name="fade">
            <div class="center">
                <p>{{lines.line1}}</p>
                <p>{{lines.line2}}</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="photo" v-if="showStart">
                <img src="../assets/start-btn.png" @click="start()"/>
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "StartPage",
        data() {
            return {
                lines: {
                    line1: "",
                    line2: "",
                },
                words: [{
                    word: "一个人的心理不只是生物本能，",
                    speed: 150,
                    line: "line1",
                }, {
                    word: "而是生活环境，社会文化与人际关系的共同左右。",
                    speed: 80,
                    line: "line1",
                }, {
                    word: "每个人的身上都被贴着各种各样的标签，",
                    speed: 60,
                    line: "line2",
                }, {
                    word: "各种能源也是，来看一下你的能源属性吧？",
                    speed: 60,
                    line: "line2",
                }],
                showStart: false,
            }
        },
        created() {
            this.initWord();
        },
        methods: {
            start: function () {
                this.$bus.$emit("answer", {id: 8});
            },
            initWord: async function (j = 0) {
                const word = this.words[j];
                if (!word) {
                    this.showStart = true;
                    return;
                }
                let i = 0;
                let timer;
                const w = word.word.split("");
                const that = this;
                timer = await setInterval(async () => {
                    that.lines[word.line] += w[i];
                    i++;
                    if (i === w.length) {
                        clearInterval(timer);
                        that.initWord(j + 1);
                    }
                }, word.speed);
            }
        }
    }
</script>

<style scoped>
    #start-page {
        width: 100%;
        height: 100%;
    }

    .title {
        width: 100%;
        text-align: center;
        padding: 0.9rem 0 0 0;
        color: rgba(255, 255, 255, 1);
    }

    .title h1 {
        font-size: 0.26rem;
        height: 0.35rem;
        color: rgba(255, 255, 255, 1);
        line-height: 0.35rem;
        letter-spacing: 0.06rem;
    }

    .center {
        width: 100%;
        height: fit-content;
        text-align: center;
        padding: 0.5rem 0 0 0;
        color: rgba(255, 255, 255, 1);
        line-height: 0.35rem;
        letter-spacing: 0.06rem;
        display: flex;
        flex-direction: column;
    }

    .center p {
        width: 2.64rem;
        height: fit-content;
        margin: 0 auto;
        line-height: 0.3rem;
        text-align: justify;
        font-size: 0.16rem;
        color: rgba(255, 255, 255, 1);
        text-shadow: 0 0.02rem 0.2rem rgba(0, 0, 0, 0.5);
    }
    .center p:nth-child(2) {
        padding-bottom: 0.5rem;
        padding-top: 0.45rem;
    }

    .photo img {
        width: 1.22rem;
        padding-top: 0.41rem;
        height: 0.41rem;
        display: block;
        margin: 0 auto;
    }


</style>
