<template>
    <div>
        {{data}}
    </div>
</template>
<script>
    module.exports = {
        props: {
            data: String,
            lineData: Object,
            tableData: Array,
            columnOptions: Object
        },
        data: function () {
            return {};
        }
    };
</script>
