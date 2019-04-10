<template>
    <div id="sunQuestion">
        {{showWord}}
    </div>
</template>

<script>
    export default {
        name: "SunQuestion",
        data() {
            return {
                word: "你更喜欢日出，还是日落？",
                showWord: ''
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
                }
            }, 1000);
        }
    }
</script>

<style scoped>
    #sunQuestion {
        width: 100%;
        height: 100%;
        background: url("../assets/1.png");
        background-size: 100% 100%;
    }

</style>