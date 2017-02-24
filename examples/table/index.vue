<template>
    <div>
        <table-component :options="tableOptions">
            <template slot="name" scope="props">
                <table-widget-text :data="props.data"></table-widget-text>
            </template>
            <template slot="age" scope="props">
                <table-widget-number :data="props.data"></table-widget-number>
            </template>
        </table-component>
    </div>
</template>
<script>
    var tableComponent = require('../table-component');
    var tableWidgetText = require('../table-component-widget/text');
    var tableWidgetNumber = require('../table-component-widget/number');
    module.exports = {
        data: function () {
            return {
                tableOptions: {
                    columns: [
                        {
                            label: '姓名',
                            fieldName: 'name'
                        },
                        {
                            label: '年龄',
                            fieldName: 'age'
                        }
                    ]
                }
            }
        },
        components: {
            'table-component': tableComponent,
            'table-widget-text': tableWidgetText,
            'table-widget-number': tableWidgetNumber
        }
    };
</script>
