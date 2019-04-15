<template>
    <div id="start-page">
        <h1>测一测你的能源属性</h1>
        <div class="text">
            <p>一个人的心理不只是生物本能，而是生活环境，社会文化与人际关系的共同左右。</p>
            <p> 每个人的身上都被贴着各种各样的标签，各种能源也是，来看一下你的能源属性吧？</p>
            <img src="../assets/start-btn.png" @click="start()" class="title"/>
        </div>
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

    h1 {
        width: 3rem;
        height: 0.35rem;
        font-size: 0.26rem;
        margin: 0 auto;
        color: rgba(255, 255, 255, 1);
        line-height: 0.35rem;
        letter-spacing: 0.06rem;
        text-shadow: 0 0.02rem 0.2rem rgba(0, 0, 0, 0.5);
    }

    .text {
        width: 2.78rem;
        height: 1.5rem;
        margin: 0 auto;
        font-size: 0.16rem;
        color: rgba(255, 255, 255, 1);
        line-height: 0.2rem;
        letter-spacing: 0.03rem;
        text-shadow: 0 0.02rem 0.2rem rgba(0, 0, 0, 0.5);
    }

    .text p {
        margin: 0.2rem auto;
    }

    .text img {
        width: 1.22rem;
        height: 0.4rem;
        margin: 0 auto;
    }



</style>
