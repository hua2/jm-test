<template>
    <div id="loading-panel">
        <h1><strong>Loading...</strong></h1>
        <h2><strong>{{percent}}</strong></h2>
        <span v-if="loaded" @click="start()" class="start">开始</span>
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
                publicPath: process.env.BASE_URL,
                images: [
                    "static/img/bg-birth.png",
                    "static/img/bg-dream.png",
                    "static/img/bg-movie.png",
                    "static/img/bg-music.png",
                    "static/img/bg-sun.png",
                    "static/img/bg-window.png",
                    "static/img/cloud.png",
                    "static/img/coal.png",
                    "static/img/ele.gif",
                    "static/img/electricity.png",
                    "static/img/gas.png",
                    "static/img/kun.png",
                    "static/img/light.gif",
                    "static/img/light.png",
                    "static/img/meteor.png",
                    "static/img/movie-line.png",
                    "static/img/oil.png",
                    "static/img/people.png",
                    "static/img/player.png",
                    "static/img/sun-down.png",
                    "static/img/sun-rise.png",
                    "static/img/sunset.png",
                    "static/img/wind.gif",
                    "static/img/wind.png",
                    "static/img/window.png",
                ],
                audios: [
                    "static/media/bg-music.mp3",
                    "static/media/bg-question.mp3",
                ]
            }
        },
        mounted: function () {
            this.preload()
        },
        methods: {
            preload: function () {

                for (let img of this.images) {
                    console.log('load img ' + img);
                    let image = new Image();
                    image.src = this.publicPath + img;
                    image.onload = () => {
                        console.log('loaded img ' + img);
                        this.count++;
                        this.countToPercent();
                    }
                }

                for (let aud of this.audios) {
                    console.log('load audio ' + aud);
                    let audio = new Audio();
                    audio.src = this.publicPath + aud;
                    audio.onloadeddata = () => {
                        console.log('loaded audio ' + aud);
                        this.count++;
                        this.countToPercent();
                    };
                    audio.load();
                }
                console.log(this.count);

            },
            countToPercent: function () {
                // 总共需要加载
                const all = this.images.length + this.audios.length;
                // 计算图片加载的百分数，绑定到percent变量
                let percentNum = Math.floor(this.count / all * 100);
                this.percent = `${percentNum}%`
            },
            start: function () {
                let music = document.getElementById("audio");
                music.play();
                this.$bus.$emit("answer", {id: 0});
            }
        },
        watch: {
            count: function (val) {
                const all = this.images.length + this.audios.length;
                if (val === all) {
                    this.loaded = true;
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
