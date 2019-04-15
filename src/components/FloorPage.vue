<template>
    <div class="floorPage">
        <div id="ele" v-if="showPage==='a'">
            <img src="../assets/electricity.png" :class="{shadow:gif}" alt="">
            <video src="../assets/ele.mp4" type="video/mp4" autoplay="autoplay" v-if="gif"></video>
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="light" v-if="showPage==='f'">
            <img src="../assets/light.png" :class="{shadow:gif}" alt="">
            <video src="../assets/light.mp4" type="video/mp4" autoplay="autoplay" v-if="gif"></video>
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="coal" v-if="showPage==='c'">
            <img src="../assets/coal.png" :class="{shadow:gif}" alt="">
            <video src="../assets/coal.mp4" type="video/mp4" autoplay="autoplay" v-if="gif"></video>
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="gas" v-if="showPage==='e'">
            <img src="../assets/gas.png" :class="{shadow:gif}" alt="">
            <video src="../assets/gas.mp4" type="video/mp4" autoplay="autoplay" v-if="gif"></video>
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="oil" v-if="showPage==='b'">
            <img src="../assets/oil.png" :class="{shadow:gif}" alt="">
            <video src="../assets/oil.mp4" type="video/mp4" autoplay="autoplay"  v-if="gif"></video>
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="wind" v-if="showPage==='d'">
            <img src="../assets/wind.png" :class="{shadow:gif}" alt="">
            <video src="../assets/wind.mp4" type="video/mp4" autoplay="autoplay" v-if="gif"></video>
            <a class="link" href="http://www.jm.energy"></a>
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
            };
        },
        created() {
            setTimeout(() => {
                this.gif = false
            }, 1500);
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

    .floorPage .shadow {
        position: absolute;
        opacity: 0.01;
        top: 0;
        left: 0;
        z-index: 100;
    }

    .link {
        width: 1.45rem;
        height: 0.62rem;
        left: 0.35rem;
        bottom: 0.3rem;
        position: absolute;
        z-index: 101;
    }
</style>
