<template>
    <div id="end-page">
        <div class="text">
            <p>{{showLine}}<span>{{showWord}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EndPage",
        data() {
            return {
                word: "...",
                showWord: "",
                showLine: "角马大数据开始运算",
                showWordId: undefined,
                showLineId: undefined
            }
        },
        created() {
            let i = 0;
            let line = 1;
            const that = this;
            this.showLineId = setInterval(function () {
                line++;
                that.showLine = (line === 2 ? "正在捕捉高能粒子" : "能源属性生成中");
                if (line === 3) {
                    clearInterval(this.showLineId);
                }
            }, 1000);
            this.showWordId = setInterval(function () {
                that.showWord = that.word.substr(0, i);
                i++;
                if (that.showWord === that.word) {
                    i = 0;
                }
            }, 200);
            setTimeout(() => {
                this.$bus.$emit("answer", {id: 9});
            }, 400000)
        },
        beforeDestroy() {
            if (this.showLineId) {
                clearInterval(this.showLineId);
            }
            if (this.showWordId) {
                clearInterval(this.showWordId);
            }
        }
    }
</script>

<style scoped>
    #end-page {
        width: 100%;
        height: 100%;
    }

    .text {
        width: 2.84rem;
        height: 2.31rem;
        margin: 2.17rem auto 0 auto;
        z-index: 101;
        background: url("../assets/ball.png");
        background-size: 100% 100%;
    }

    .text p {
        height: 0.21rem;
        font-size: 0.17rem;
        color: rgba(255, 255, 255, 1);
        line-height: 0.21rem;
        letter-spacing: 0.05rem;
        text-align: center;
        padding-top: 1rem;
        text-shadow: 0 0.04rem 0.08rem rgba(39, 39, 39, 1);
    }

    .text p:nth-child(2) {
        padding-top: 0.1rem;
    }

    .text p:nth-child(3) {
        padding-top: 0.1rem;
    }

    .text span {
        position: absolute;

    }

</style>
