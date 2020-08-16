<template>
    <div id="app">
        <Layout></Layout>
        <router-view></router-view>
    </div>
</template>

<script>
    import Layout from './components/Layout'
    import buttonC from './views/button';

    export default {
        name: 'App',
        components: {
            Layout,
            buttonC
        }
    }
</script>

<style>

</style>
