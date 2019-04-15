<template>
    <div id="end-page">
        <div class="text">能源属性生成
            <span>{{showWord}}</span>
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
                showWordId: undefined
            }
        },
        created() {
            let i = 0;
            const that = this;
            this.showWordId = setInterval(function () {
                that.showWord = that.word.substr(0, i);
                i++;
                if (that.showWord === that.word) {
                    i = 0;
                }
            }, 200);
            setTimeout(() => {
                this.$bus.$emit("answer", {id: 9});
            }, 2000)
        },
        beforeDestroy() {
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
        height: 0.3rem;
        font-size: 0.24rem;
        color: rgba(255, 255, 255, 1);
        line-height: 0.3rem;
        letter-spacing: 0.05rem;
        display: block;
        text-align: center;
        width: 100%;
        padding-top: 3rem;
    }
    .text span{
        position: absolute;

    }
</style>
