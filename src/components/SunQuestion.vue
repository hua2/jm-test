<template>
    <div id="sunQuestion">
        <div class="title">
            {{showWord}}
        </div>
        <transition name="fade">
            <div class="img" v-if="showUnKnow">
                <img src="../assets/sun-rise.jpg" alt="" :class="{active:active ==='a'}">
                <img src="../assets/sun-down.jpeg" alt="" :class="{active:active ==='d'}">
            </div>
        </transition>
        <transition name="fade">
            <div class="choose" v-if="showUnKnow">
                <div class="choose-left" @click="chooseAnswer('a')">日出</div>
                <div class="choose-right" @click="chooseAnswer('d')">日落</div>
            </div>
        </transition>

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
            }, 500);
        },
        methods: {
            chooseAnswer: function (a) {
                this.active = a;
            }
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

    .title {
        width: 100%;
        height: 1rem;
        padding: 2rem 0 0.2rem 0.6rem;
        font-size: 0.34rem;
        color: #fff;
        letter-spacing: 0.02rem;
        font-weight: 300;
    }

    .img {
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: space-around;
    }

    .img img {
        width: 2rem;
        opacity: 0.8;
        transition: opacity .5s;
        box-shadow: -1px 1px 3px 5px rgba(0, 0, 0, 0.8);
    }

    .img img.active {
        opacity: 1;
    }

    .choose {
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.26rem;
        color: #fff;
        display: flex;
        justify-content: space-around;
    }

    .choose .choose-left {
        width: 2rem;
        text-align: center;
    }

    .choose .choose-right {
        width: 2rem;
        text-align: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }


</style>