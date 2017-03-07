<template>
    <table>
        <thead>
        <tr>
            <td v-for="item in options.columns">
                {{item.label}}
            </td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data">
            <td v-for="column in options.columns">
                <slot :name="column.fieldName"
                      :data="item[column.fieldName]"
                      :lineData="item"
                      :tableData="data"
                      :columnOptions="column">
                </slot>
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script>
    module.exports = {
        props: {
            options: Object
        },
        data: function () {
            return {
                data: [
                    {
                        name: 'tom',
                        age: 3
                    },
                    {
                        name: 'jerry',
                        age: 1
                    }
                ]
            }
        }
    };
</script>
