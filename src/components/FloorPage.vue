<template>
    <div id="floorPage" class="floorPage">
        <div id="ele" v-if="showPage==='a'">
            <img src="../assets/electricity.png" :class="{shadow:gif}" alt="">
        </div>
        <a class="link" href="http://www.jm.energy"></a>
        <div id="light" v-if="showPage==='f'">
            <img src="../assets/light.png" :class="{shadow:gif}" alt="">
        </div>
        <div id="coal" v-if="showPage==='c'">
            <img src="../assets/coal.png" :class="{shadow:gif}" alt="">
        </div>
        <div id="gas" v-if="showPage==='e'">
            <img src="../assets/gas.png" :class="{shadow:gif}" alt="">
        </div>
        <div id="oil" v-if="showPage==='b'">
            <img src="../assets/oil.png" :class="{shadow:gif}" alt="">
        </div>
        <div id="wind" v-if="showPage==='d'">
            <img src="../assets/wind.png" :class="{shadow:gif}" alt="">
        </div>
        <video autoplay loop muted playsinline id="vid">
            <source v-if="showPage==='a'" src="../assets/ele.mp4" type="video/mp4">
            <source v-if="showPage==='f'" src="../assets/light.mp4" type="video/mp4">
            <source v-if="showPage==='c'" src="../assets/coal.mp4" type="video/mp4">
            <source v-if="showPage==='e'" src="../assets/gas.mp4" type="video/mp4">
            <source v-if="showPage==='e'" src="../assets/gas.mp4" type="video/mp4">
            <source v-if="showPage==='b'" src="../assets/oil.mp4" type="video/mp4">
            <source v-if="showPage==='d'" src="../assets/wind.mp4" type="video/mp4">
        </video>
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
            }, 2000);
        },
        methods: {}
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
        width: 1.45rem;
        height: 0.62rem;
        left: 0.35rem;
        bottom: 0.3rem;
        position: absolute;
        z-index: 101;
    }
</style>
