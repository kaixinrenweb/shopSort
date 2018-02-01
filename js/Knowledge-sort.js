// var ary = [12, 13, 24, 11, 16, 28, 10];
/*
 * SORT实现的原理
 *   每一次拿出数组中的当前项和后一项，每一次这样的操作都会让传递的匿名函数执行一次，不仅执行，而且还给这个匿名函数传递了两个实参：
 *   a => 本次拿出的当前项
 *   b => 本次拿出的后一项
 *
 *   在匿名函数中，如果我RETURN的结果是一个>0的数，让a和b交换位置；反之返回<=0的值，a和b的位置不变；
 */
// ary.sort(function (a, b) {
//     //console.log(a, b);
//     //return a - b;
//     return 1; //<=> ary.reverse 把整个数组倒过来排列
// });
// console.log(ary);

//=>面试题1：把一个数组随机打乱
// ary.sort(function () {
//     //=>每一次返回一个随机创建的大于零或者小于零的数即可
//     return Math.round(Math.random() * (10) - 5);
// });

//=>面试题2：把数组按照年龄升序排序
var ary = [
    {
        name: '唐元帅',
        age: 48
    },
    {
        name: '陆永勇',
        age: 29
    },
    {
        name: '陈金广',
        age: 63
    }
];
// ary.sort(function (a, b) {
//     return a.age - b.age;
// });
//=>按照姓名排序
// ary.sort(function (a, b) {
//     var curName = a.name,
//         nextName = b.name;
//     return curName.localeCompare(nextName);//=>localeCompare字符串的方法,可以用来比较两个字符串的大小
// });
// console.log(ary);









