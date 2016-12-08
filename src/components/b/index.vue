<template>
    <div class="component-b">
        {{name}}
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                name: 'componentB'
            };
        }
    };
</script>
<style>
    .component-b {
        padding: 20px;
        text-align: center;
        color: red;
    }
</style>
