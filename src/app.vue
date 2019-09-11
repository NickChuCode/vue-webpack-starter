<template>
    <div id="app">
        Hello Vue!
        <button @click="sayHello"></button>
    </div>
</template>

<script>
    export default {
        name: "app",
        methods: {
            sayHello () {
                console.log('hsi')
            }
        }
    }
</script>

<style scoped lang="scss">
    #app {
        color: blue
    }
</style>