/**
 * Created by zhaoxiaoqiang on 2017/3/13.
 */
module.exports = function (ctx) {
    return {
        "statusInfo": "success",
        "status": 0,
        "data": {
            "text": 'mock post 数据',
            "a": 'q',
            "params": ctx.request.body
        }
    };
};