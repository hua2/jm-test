<template>
    <div class="floorPage">
        <div id="ele" v-if="ele.show">
            <img src="../assets/electricity.png" :class="{shadow:ele.gif}" alt="">
            <img src="../assets/ele.gif" alt="" v-if="ele.gif">
            <a class="link" href="http://liuyonghua.cn"></a>
        </div>
        <div id="oil" v-if="oil.show">
            <img src="../assets/oil.png" :class="{shadow:oil.gif}" alt="">
            <img src="../assets/oil.gif" alt="" v-if="oil.gif">
            <a class="link" href="http://liuyonghua.cn"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FloorPage",
        data() {
            return {
                ele: {
                    show: true,
                    gif: true,
                    png: true,
                },
                oil: {
                    show: false,
                    gif: true,
                    png: true,
                },
            };
        },
        created() {
            setTimeout(() => {
                this.ele.gif = false
            }, 1000);
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
        width: 1rem;
        height: 1rem;
        left: 1rem;
        bottom: 1rem;
        position: absolute;
        z-index: 101;
    }
</style>
