<template>
    <div id="start-page">
        <div class="title">
            <h1>测一测你的能源属性</h1>
            <!--<p>一个人的心理不只是生物本能，而是生活环境，社会文化与人际关系的共同左右。</p>-->
            <!--<p> 每个人的身上都被贴着各种各样的标签，各种能源也是，来看一下你的能源属性吧？</p>-->
            <!--<img src="../assets/start-btn.png" @click="start()"/>-->
        </div>
        <transition name="fade">
            <div class="center">
                <p>一个人的心理不只是生物本能，而是生活环境，社会文化与人际关系的共同左右。</p>
                <p> 每个人的身上都被贴着各种各样的标签，各种能源也是，来看一下你的能源属性吧？</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="photo">
                <img src="../assets/start-btn.png" @click="start()"/>
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "StartPage",
        methods: {
            start: function () {
                let music = document.getElementById("audio");
                music.play();
                this.$bus.$emit("answer", {id: 8});
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
        font-size: 0.28rem;
        height: 0.35rem;
        color: rgba(255, 255, 255, 1);
        line-height: 0.35rem;
        letter-spacing: 0.06rem;
    }

    .center {
        width: 100%;
        height: 3rem;
        text-align: center;
        padding: 0.5rem 0 0 0;
        color: rgba(255, 255, 255, 1);
        line-height: 0.35rem;
        letter-spacing: 0.06rem;
        display: flex;
        flex-direction: column;
    }

    .center p {
        width: 2.78rem;
        height: 0.84rem;
        margin: 0 auto;
        text-align: left;
        font-size: 0.16rem;
        color: rgba(255, 255, 255, 1);
        line-height: 0.3rem;
        letter-spacing: 0.06rem;
        text-shadow: 0 0.02rem 0.2rem rgba(0, 0, 0, 0.5);
    }

    .center p:nth-child(2) {
        height: 1.2rem;
        padding-bottom: 1.35rem;
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
