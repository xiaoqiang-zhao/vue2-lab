<template>
    <div>
        当前页面：Page A
        <div>
            <router-link to="/page/b"> 跳转到 Page B </router-link>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {};
        }
    };
</script>
<style>
    div {
        padding: 20px;
        text-align: center;
        color: red;
    }
</style>
