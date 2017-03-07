<template>
    <div>
        <children-comp>
            <div>{{text1}}</div>
            <div slot="t2">{{text2}}</div>
            <template slot="t3" scope="props">
                <!-- 注意上面一行必须用 template 标签 -->
                <div>
                    <span>{{ props.text3 }}</span>
                </div>
            </template>
            <template slot="list" scope="props">
                <div>
                    {{props.title}}
                    <span v-for="item in props.list">{{ item.name }}</span>
                </div>
            </template>
            <template slot="custom-comp" scope="props">
                <custom-comp :options="props.data"></custom-comp>
            </template>
            <div slot="alive">动态组件</div>
        </children-comp>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                text1: '普通单个匿名 slot，作用域是父组件',
                text2: '具名组件，作用域是父组件',
                text3: 'text3，作用域是父组件' // 上面 Dom 中的 text3 并不会取该值
            };
        },
        components: {
            'children-comp': require('./children-comp.vue'),
            'custom-comp': require('./custom-comp.vue')
        }
    };
</script>
