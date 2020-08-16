<template>
    <div class="layout">
        <button @click="goButton">按钮</button>
        <button @click="goCell">Cell</button>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        methods: {
            goButton() {
                this.$router.push({
                    name: 'button'
                })
            },
            goCell() {
                this.$router.push({
                    name: 'cell'
                })
            }

        }
    }
</script>

<style scoped>
    .layout {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px;
        background-color: #f3f3f3;
    }

</style>
