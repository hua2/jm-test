<template>
    <div id="app">
        <SunQuestion v-if="nowId === 1"></SunQuestion>
        <DreamQuestion v-if="nowId === 2"></DreamQuestion>
        <MovieQuestion v-if="nowId === 3"></MovieQuestion>
        <MusicQuestion v-if="nowId === 4"></MusicQuestion>
        <BirthQuestion v-if="nowId ===5"></BirthQuestion>
        <WindowQuestion v-if="nowId ===6"></WindowQuestion>
        <FloorPage v-if="nowId ===7" :showPage="showPage"></FloorPage>
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
                    window: undefined
                },
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
                    this.nowId = 4;
                    this.total.dream = res.answer;
                }
                if (res.id === 3) {
                    this.nowId = 4;
                    this.total.movie = res.answer;
                }
                if (res.id === 4 && res.answer === 'a') {
                    this.nowId = 5;
                    this.total.music = res.answer;
                }
                if (res.id === 4 && res.answer === 'b') {
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
            }
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

    #app {
        width: 100%;
        height: 100%;
        background: #323232;
    }
    .icon_audio {
        width: 0.37rem;
        height: 0.37rem;
        position: absolute;
        top: 0.38rem;
        right: 0.43rem;
        z-index: 999;
        background: url("./assets/icon_audio_off.png") no-repeat 0 0 ;
        background-size:100% 100% ;
    }
    .sound_icon_on {
        background: url("./assets/icon_audio.png") 0 0 no-repeat;
        animation: rotate360 2.4s linear infinite;
        -webkit-animation: rotate360 2.4s linear infinite;
        background-size:100% 100% ;
    }
    .sound_icon_off {
        background: url("./assets/icon_audio_off.png") no-repeat 0 0 !important;
        background-size:100% 100% !important;
    }
</style>
