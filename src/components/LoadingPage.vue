<template>
    <div id="loading-panel">
        <h1><strong>Loading...</strong></h1>
        <h2><strong>{{percent}}</strong></h2>
        <!--<span v-if="loaded" @click="start()" class="start">开始</span>-->
    </div>
</template>

<script>
    export default {
        name: "LoadingPage",
        created() {

        },
        data() {
            return {
                count: 0,
                loaded: false,
                percent: '',
                loadingIntervalId: '',

            }
        },
        mounted: function () {
            this.preload()
        },
        methods: {
            preload: function () {
                // 模拟加载
                this.loadingIntervalId = setInterval(() => {
                    this.count++;
                }, 30);
            },
            // start: function () {
            //     let music = document.getElementById("audio");
            //     music.play();
            //     this.$bus.$emit("answer", {id: 0});
            // }
        },
        watch: {
            count: function (val) {
                let percentNum = Math.floor(this.count / 100 * 100);
                this.percent = `${percentNum}%`;
                if (val === 100) {
                    this.loaded = true;
                    clearInterval(this.loadingIntervalId);
                }
            }
        }
    }
</script>

<style scoped>
    #loading-panel {
        text-align: center;
        color: #fff;
        padding-top: 2rem;
    }

    .start {
        display: block;
        width: 100%;
        padding-top: 1rem;
        font-size: 0.24rem;
    }
</style>
