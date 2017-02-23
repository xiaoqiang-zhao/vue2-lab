<template>
    <div>
        <slot></slot>
        <slot name="t2"></slot>
        <slot name="t3" text3="作用域是子组件"></slot>
        <slot name="list" :list="list" title="子组件数据作用域下的循环："></slot>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                list: [
                    {
                        name: 'name1，'
                    },
                    {
                        name: 'name2'
                    }
                ]
            };
        }
    };
</script>
