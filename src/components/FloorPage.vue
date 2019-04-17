<template>
    <div class="floorPage">
        <div id="ele" v-if="showPage==='a'">
            <img src="../assets/ele.png" :class="{shadow:gif}" alt="">
            <img src="../assets/ele.gif" alt="" v-if="gif">
        </div>
        <a class="link" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg2MDAzOTgwMA==#wechat_redirect"></a>
        <div class="share" @click="shareTo" v-if="share">
            <img src="../assets/sharedTo.png" alt="">
        </div>
        <div id="light" v-if="showPage==='f'">
            <img src="../assets/light.png" :class="{shadow:gif}" alt="">
            <img src="../assets/light.gif" alt="" v-if="gif">
        </div>
        <div id="coal" v-if="showPage==='c'">
            <img src="../assets/coal.png" :class="{shadow:gif}" alt="">
            <img src="../assets/coal.gif" alt="" v-if="gif">
        </div>
        <div id="gas" v-if="showPage==='e'">
            <img src="../assets/gas.png" :class="{shadow:gif}" alt="">
            <img src="../assets/gas.gif" alt="" v-if="gif">
        </div>
        <div id="oil" v-if="showPage==='b'">
            <img src="../assets/oil.png" :class="{shadow:gif}" alt="">
            <img src="../assets/oil.gif" alt="" v-if="gif">
        </div>
        <div id="wind" v-if="showPage==='d'">
            <img src="../assets/wind.png" :class="{shadow:gif}" alt="">
            <img src="../assets/wind.gif" alt="" v-if="gif">
        </div>

    </div>
</template>

<script>

    export default {
        name: "FloorPage",
        props: {
            showPage: String
        },
        data() {
            return {
                gif: true,
                share: false,
            };
        },
        created() {
            setTimeout(() => {
                this.gif = false
            }, 3000);
        },
        methods: {
            shareTo: function () {
                this.share = true
            }
        }
    }
</script>

<style scoped>
    .floorPage {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    .floorPage img {
        width: 100%;
        height: 100%;

    }

    .floorPage video {
        width: 100%;
        height: 100%;
    }

    canvas {
        position: absolute;
        top: 0;
        z-index: 101;
    }

    .floorPage .shadow {
        position: absolute;
        opacity: 0.01;
        top: 0;
        left: 0;
        z-index: 100;
    }

    .link {
        width: 1rem;
        height: 0.4rem;
        left: 0.38rem;
        bottom: 0.6rem;
        position: absolute;
        z-index: 101;
    }

    .share {
        width: 1rem;
        height: 0.4rem;
        right: 1.25rem;
        bottom: 0.6rem;
        position: absolute;
        z-index: 101;
    }
</style>
