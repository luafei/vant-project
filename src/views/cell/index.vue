<template>
    <div class="cell">
        <h3>Cell usage</h3>
        <p>基础用法</p>
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
        <p>单元格大小</p>
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
