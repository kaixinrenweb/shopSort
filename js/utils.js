/*
 * 真实项目中，我们会有一个UTILS或者类似于它的JS，包含了项目中常用到的一些公共方法
 */
var utils = (function () {
    //=>把类数组转换为数组（兼容所有的浏览器）
    function toArray(classAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(classAry);
        } catch (e) {
            for (var i = 0; i < classAry.length; i++) {
                ary[ary.length] = classAry[i];
            }
        }
        return ary;
    }

    //=>把JSON格式的字符串转换为JSON格式的对象
    function toJSON(str) {
        return "JSON" in window ? JSON.parse(str) : eval('(' + str + ')');
    }

    return {
        toArray: toArray,
        toJSON: toJSON
    }
})();
