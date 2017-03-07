<template>
    <div>
        自定义组件: {{options.text}}
    </div>
</template>
<script>
    module.exports = {
        props: {
            options: {
                type: Object,
                default: {}
            }
        },
        data: function () {
            return {};
        }
    };
</script>
