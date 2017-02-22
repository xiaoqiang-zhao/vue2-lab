<template>
    <div>
        <parents>
            <div>slot in index</div>
        </parents>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {};
        },
        components: {
            'parents': require('./parents.vue')
        }
    };
</script>
