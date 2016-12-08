/**
 * 页面入口文件
 *
 * Created by zhaoxiaoqiang on 2016/12/8.
 */

module.exports = {
  do: function (el, text) {
      var h2 = document.createElement('h2');
      h2.innerHTML = text;
      el.appendChild(h2);
  }
};