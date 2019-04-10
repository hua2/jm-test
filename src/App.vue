<template>
    <div id="app">
        <SunQuestion></SunQuestion>
    </div>
</template>

<script>

    import SunQuestion from "./components/SunQuestion";

    export default {
        name: 'app',
        components: {
            SunQuestion
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
