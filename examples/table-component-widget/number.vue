<template>
    <div>
        {{data}}
    </div>
</template>
<script>
    module.exports = {
        props: {
            data: Number,
            lineData: Object,
            tableData: Array,
            columnOptions: Object
        },
        data: function () {
            return {};
        }
    };
</script>
