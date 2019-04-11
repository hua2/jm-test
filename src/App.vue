<template>
    <div id="app">
        <!--<SunQuestion></SunQuestion>-->
        <DreamQuestion></DreamQuestion>
    </div>
</template>

<script>

    // import SunQuestion from "./components/SunQuestion";
    import DreamQuestion from "./components/DreamQuestion";

    export default {
        name: 'app',
        components: {
            DreamQuestion,
            // SunQuestion
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
    }

    #app {
        width: 100%;
        height: 100%;
    }
</style>
