<template>
    <div class="floorPage">
        <img src="../assets/electricity.png" class="shadow" alt="">
        <img src="../assets/ele.gif" alt="">
        <a id="link" href="http://liuyonghua.cn"></a>
    </div>
</template>

<script>
    export default {
        name: "FloorPage",
        data() {
            return {};
        },
        created() {
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

    #link {
        width: 1rem;
        height: 1rem;
        left: 1rem;
        bottom: 1rem;
        position: absolute;
        z-index: 101;
    }
</style>
