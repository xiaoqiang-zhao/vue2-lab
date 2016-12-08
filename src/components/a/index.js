
var Vue = require('vue');
var component = Vue.extend({
    data: function () {
        return {
            name: 'componentA'
        };
    },
    template: '<div>{{name}}</div>'
});

module.exports = component;