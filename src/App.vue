<template>
    <div id="app"
         :class="{sun:nowId===1,dream:nowId===2,movie:nowId===3,music:nowId===4,birth:nowId===5,window:nowId===6}">
        <div class="page">
            <SunQuestion v-if="nowId === 1"></SunQuestion>
            <DreamQuestion v-if="nowId === 2"></DreamQuestion>
            <MovieQuestion v-if="nowId === 3"></MovieQuestion>
            <MusicQuestion v-if="nowId === 4"></MusicQuestion>
            <BirthQuestion v-if="nowId ===5"></BirthQuestion>
            <WindowQuestion v-if="nowId ===6"></WindowQuestion>
        </div>
        <FloorPage v-if="nowId ===7" :showPage="showPage"></FloorPage>
        <div class="icon_audio" :class="{sound_icon_on:musicStarted}" ref="btnAudio"
             @click="musicStarted?stopMusicAnim():startMusicAnim()"></div>
    </div>
</template>

<script>

    import SunQuestion from "./components/SunQuestion";
    import DreamQuestion from "./components/DreamQuestion";
    import MovieQuestion from "./components/MovieQuestion";
    import MusicQuestion from "./components/MusicQuestion";
    import FloorPage from "./components/FloorPage";
    import BirthQuestion from "./components/BirthQuestion";
    import WindowQuestion from "./components/WindowQuestion";

    export default {
        name: 'app',
        components: {
            WindowQuestion,
            BirthQuestion,
            MusicQuestion,
            MovieQuestion,
            FloorPage,
            DreamQuestion,
            SunQuestion
        },
        data() {
            return {
                nowId: 1,
                total: {
                    sun: undefined,
                    dream: undefined,
                    movie: undefined,
                    music: undefined,
                    birth: undefined,
                    window: undefined,
                    musicAnimId: undefined,
                },
                audio: new Audio(),
                musicStarted: true,
                musicRotate: 0,
                showPage: "a"
            }
        },
        created() {
            this.$bus.$on("answer", (res) => {
                if (res.id === 1 && res.answer === 'a') {
                    this.nowId = 3;
                    this.total.sun = res.answer;
                }
                if (res.id === 1 && res.answer === 'b') {
                    this.nowId = 2;
                    this.total.sun = res.answer;
                }
                if (res.id === 2) {
                    this.stopMusicAnim();
                    this.nowId = 4;
                    this.total.dream = res.answer;
                }
                if (res.id === 3) {
                    this.stopMusicAnim();
                    this.nowId = 4;
                    this.total.movie = res.answer;
                }
                if (res.id === 4 && res.answer === 'a') {
                    this.startMusicAnim();
                    this.nowId = 5;
                    this.total.music = res.answer;
                }
                if (res.id === 4 && res.answer === 'b') {
                    this.startMusicAnim();
                    this.nowId = 6;
                    this.total.music = res.answer;
                }
                if (res.id === 5) {
                    this.total.birth = res.answer;
                    this.countAnswer();
                }
                if (res.id === 6) {
                    this.total.window = res.answer;
                    this.countAnswer();
                }
            });
        },
        mounted() {
            this.startMusicAnim();
        },
        methods: {
            countAnswer: function () {
                let a = 0;
                let b = 0;
                let c = 0;
                let d = 0;
                let e = 0;
                let f = 0;
                //第一题
                if (this.total.sun === 'a') {
                    d++;
                    e++;
                    f++;
                }
                if (this.total.sun === 'b') {
                    a++;
                    b++;
                    c++;
                }
                //第二题
                if (this.total.dream === 'a') {
                    a++;
                    c++;
                }
                if (this.total.dream === 'b') {
                    b++;
                    d++;
                }
                if (this.total.dream === 'c') {
                    e++;
                    f++;
                }
                //第三题
                if (this.total.movie === 'a') {
                    e++;
                    f++;
                }
                if (this.total.movie === 'b') {
                    c++;
                    d++;
                }
                if (this.total.movie === 'c') {
                    a++;
                    b++;
                }
                //第四题
                if (this.total.music === 'a') {
                    d = d + 2;
                    e = e + 2;
                    f = f + 2;
                }
                if (this.total.music === 'b') {
                    a = a + 2;
                    b = b + 2;
                    c = c + 2;
                }
                //第五题
                if (this.total.birth === 'a') {
                    f++;
                }
                if (this.total.birth === 'b') {
                    d++;
                }
                if (this.total.birth === 'c') {
                    e++;
                }
                //第六题
                if (this.total.window === 'a') {
                    c++;
                }
                if (this.total.window === 'b') {
                    a++;
                }
                if (this.total.window === 'c') {
                    b++;
                }
                let res = 'a';
                let max = 0;
                if (a > b) {
                    max = a;
                    res = 'a';
                } else {
                    max = b;
                    res = 'b';
                }
                if (max < c) {
                    max = c;
                    res = 'c';
                }
                if (max < d) {
                    max = d;
                    res = 'd';
                }
                if (max < e) {
                    max = e;
                    res = 'e';
                }
                if (max < f) {
                    max = f;
                    res = 'f';
                }
                console.log(this.total);
                console.log(res);
                this.showPage = res;
                this.nowId = 7;
            },
            startMusic() {
                // 播放音乐
                this.audio.src = "http://sf.sycdn.kuwo.cn/resource/n1/2/38/1387182506.mp3";
                this.audio.load();
                this.audio.play().then(() => {
                    console.log("playing……")
                }).catch((e) => {
                    console.error(e);
                });
            },
            stopMusic() {
                // 停止音乐
                this.audio.pause();
                this.audio = new Audio();
            },
            startMusicAnim: function () {
                // 播放音乐
                this.startMusic();
                this.musicStarted = true;
                const that = this;
                //开始滚动动画
                this.musicAnimId = setInterval(function () {
                    let audio = that.$refs.btnAudio;
                    let rotateStyle = "rotate(" + that.musicRotate + "deg)";
                    audio.style.transform = rotateStyle;
                    audio.style["-moz-transform"] = rotateStyle;
                    audio.style["-webkit-transform"] = rotateStyle;
                    audio.style["-o-transform"] = rotateStyle;
                    audio.style["-ms-transform"] = rotateStyle;
                    that.musicRotate += 6;
                    if (that.musicRotate > 360) {
                        that.musicRotate = 0;
                    }
                }, 40);
            },
            stopMusicAnim: function () {
                //停止音乐
                this.stopMusic();
                this.musicStarted = false;
                clearInterval(this.musicAnimId);
            },
        },
        beforeDestroy() {
            this.stopMusicAnim();
        }

    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    body, html {
        width: 100%;
        height: 100%;
        background: #323232;
    }

    #app, .page {
        width: 100%;
        height: 100%;
    }

    .sun {
        background: url("./assets/bg-sun.png");
        background-size: 100% 100%;
    }

    .dream {
        background: url("./assets/bg-dream.png");
        background-size: 100% 100%;
    }

    .movie {
        background: url("./assets/bg-movie.png");
        background-size: 100% 100%;
    }

    .music {
        background: url("./assets/bg-music.png");
        background-size: 100% 100%;
    }

    .birth {
        background: url("./assets/bg-birth.png");
        background-size: 100% 100%;
    }

    .window {
        background: url("./assets/bg-window.png");
        background-size: 100% 100%;
    }

    .icon_audio {
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        top: 0.2rem;
        right: 0.22rem;
        z-index: 999;
        background: url("./assets/icon_audio_off.png") no-repeat 0 0;
        background-size: 100% 100%;
    }

    .sound_icon_on {
        background: url("./assets/icon_audio.png") 0 0 no-repeat;
        background-size: 100% 100%;
    }

    .title {
        width: 2.16rem;
        height: 0.42rem;
        line-height: 0.2rem;
        padding: 1.04rem 0 0 0.28rem;
        font-size: 0.14rem;
        color: #fff;
        letter-spacing: 0.04rem;
        font-weight: 900;
    }

    .title.pre {
        white-space: pre;
    }

    .img {
        width: 100%;
        height: 1.71rem;
        padding-top: 0.5rem;
        display: flex;
        justify-content: center;
    }

    .img img {
        width: 1.29rem;
        height: 1.71rem;
        opacity: 0.6;
        margin: 0 0.17rem;
        transition: opacity .5s;
        box-shadow: -1px 1px 3px 5px rgba(0, 0, 0, 0.8);
    }

    .img img.active {
        opacity: 1;
    }

    .choose-content {
        margin: 0 auto;
        padding-top: 0.3rem;
        width: 1.63rem;
        display: flex;
        justify-content: center;
    }

    .choose-content .text {
        width: 0.4rem;
        height: 0.28rem;
        font-size: 0.2rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.28rem;
        display: block;
        margin-left: 0.06rem;
    }

    .choose-content .button {
        width: 0.14rem;
        height: 0.14rem;
        display: block;
        margin: auto 0;
        background: url("./assets/unselected.png");
        background-size: 100% 100%;
    }

    .choose-content .button.active {
        background: url("./assets/selected.png");
        background-size: 100% 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

</style>
