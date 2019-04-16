<template>
    <div id="sun-ques">
        <div class="title">
            {{showWord}}
        </div>
        <transition name="fade">
            <div class="img" v-if="showUnKnow">
                <div @click="chooseAnswer('a')">
                    <img src="../assets/sun-rise.png" alt="" :class="{active:active ==='a'}">
                    <div class="choose-content">
                        <span class="button" :class="{active:active ==='a'}"></span>
                        <span class="text">日出</span>
                    </div>
                </div>
                <div @click="chooseAnswer('b')">
                    <img src="../assets/sun-down.png" alt="" :class="{active:active ==='b'}">
                    <div class="choose-content">
                        <span class="button" :class="{active:active ==='b'}"></span>
                        <span class="text">日落</span>
                    </div>
                </div>
            </div>
        </transition>
        <!--<transition name="fade">-->
            <!--<div class="big">-->
                <!--<img src="../assets/big-sunrise.png" alt="" v-if="active==='a'">-->
                <!--<img src="../assets/big-sundown.png" alt="" v-if="active==='b'">-->
            <!--</div>-->
        <!--</transition>-->
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
            }, 100);
        },
        methods: {
            chooseAnswer: function (ans) {
                this.active = ans;
                if (this.chooseAnswerId) {
                    clearTimeout(this.chooseAnswerId)
                }
                this.chooseAnswerId = setTimeout(() => {
                    this.$bus.$emit("answer", {id: 1, answer: ans});
                }, 500);

            }
        }
    }
</script>

<style scoped>
    #sun-ques {
        width: 100%;
        height: 100%;
    }

    /*.big {*/
        /*position: absolute;*/
        /*top: 178px;*/
        /*left: 70px;*/
        /*z-index: 101;*/

    /*}*/
    /*.big img{*/
        /*width: 2.33rem;*/
        /*height: 3.09rem;*/
        /*box-shadow: -1px 1px 3px 5px rgba(0, 0, 0, 0.8);*/
    /*}*/

</style>
