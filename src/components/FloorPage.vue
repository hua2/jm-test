<template>
    <div class="floorPage">
        <div id="ele" v-if="showPage==='a'">
            <img src="../assets/electricity.png" :class="{shadow:gif}" alt="">
            <img src="../assets/ele.gif" alt="" v-if="gif">
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="light" v-if="showPage==='f'">
            <img src="../assets/light.png" :class="{shadow:gif}" alt="">
            <img src="../assets/light.gif" alt="" v-if="gif">
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="coal" v-if="showPage==='c'">
            <img src="../assets/coal.png" :class="{shadow:gif}" alt="">
            <img src="../assets/ele.gif" alt="" v-if="gif">
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="gas" v-if="showPage==='e'">
            <img src="../assets/gas.png" :class="{shadow:gif}" alt="">
            <img src="../assets/ele.gif" alt="" v-if="gif">
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="oil" v-if="showPage==='b'">
            <img src="../assets/oil.png" :class="{shadow:gif}" alt="">
            <img src="../assets/ele.gif" alt="" v-if="gif">
            <a class="link" href="http://www.jm.energy"></a>
        </div>
        <div id="wind" v-if="showPage==='d'">
            <img src="../assets/wind.png" :class="{shadow:gif}" alt="">
            <img src="../assets/wind.gif" alt="" v-if="gif">
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
