<template>
    <div>
        <slot></slot>
        <slot name="t2"></slot>
        <slot name="t3" text3="作用域是子组件"></slot>
        <slot name="list" :list="list" title="子组件数据作用域下的循环："></slot>
        <slot name="custom-comp" :data="customCompData"></slot>

        slot name 是来自变量的：
        <slot :name="aliveName"></slot>
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
                ],
                customCompData: {
                    text: '数据作用域来自子组件'
                },
                aliveName: 'alive'
            };
        }
    };
</script>
